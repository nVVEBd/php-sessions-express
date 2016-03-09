# PHP Sessions Express

[![Build Status](https://travis-ci.org/nVVEBd/php-sessions-express.svg?branch=master)](https://travis-ci.org/nVVEBd/php-sessions-express)

This is simple Express/Connect middleware that loads PHP sessions in
an express request.

Module returns a session object.

Original code created by: inxilpro https://github.com/inxilpro/php-session-middleware !

<h3>PR's are more than welcome</h3>

## Installation

``` bash
$ npm install php-session-middleware --save
```

## Usage

``` js

app.use(require('php-sessions-express')({
	handler: 'file',
	opts: {
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
  - This is the initial release, with minimal testing.  Use at your own risk.
