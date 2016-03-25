# PHP Sessions Express

[![Build Status](https://travis-ci.org/nVVEBd/php-sessions-express.svg?branch=master)](https://travis-ci.org/nVVEBd/php-sessions-express)	[![Dependency Status](https://david-dm.org/nVVEBd/php-sessions-express.svg)](https://david-dm.org/nVVEBd/php-sessions-express)

This is simple Express/Connect middleware that loads PHP sessions in
an express request.

Module returns a session object. If the session file is empty a req.session is set to undefined.

Original code created by: inxilpro https://github.com/inxilpro/php-session-middleware !

<h3>PR's are more than welcome</h3>

## Installation

``` bash
$ npm install php-sessions-express --save
```

## Usage

``` js

app.use(require('php-sessions-express')({
	handler: 'file',
	opts: {
		sidName: 'sess_id', // Only use this when doing a AJAX POST from other domain - else delete this config key-pair
		path: '/tmp/', //absolute path-to-folder where session files are stored
		encoding: 'utf8',
		matchReg: '[a-f0-9]{0,30}' 		//use a custom RegEx Matcher - default is /[a-f0-9]{32,40}/i
		// IMPORTANT: use a string expression for "matchReg"
	}
}));

app.get('/restricted', function(req, res) {
	if (req.session) {
		res.render('hello', {
			name: req.session.name
		});
	}
});

```

## Usage with a controller

``` js

		exports.readSession = function(req, res) {
			var session = req.session;
			// do something with session object
		};

```
### Initial release
  - This is the initial release, with minimal testing.  Use at your own risk. But I'll be updating as much as I can.

### Running tests
	- Run tests/specs from module root folder with: ```npm test```

### Roadmap
	- Change to Jasmine Testing Framework
	- Extend Test cases (testing for a empty session file, ...)
	- Implementing serialize() function

### Ideas
	And I'll be adding new ideas as I go along. <h2>Suggestions are welcome!!!</h2>

### CHANGES
	- 0.0.6 : Added changes for AJAX POST requests to be read
		NOTE: add sidName to configuration object sent to the module and match the key with the key name that is sent in AJAX data object
