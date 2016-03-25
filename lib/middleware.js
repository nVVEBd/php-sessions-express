'use strict';

module.exports = function(config) {
	config = config || {};
	var handlerName = config.handler || 'file',
	sidName = config.sidName || 'PHPSESSID',
	handlerOpts = config.opts || {},
	HandlerClass = require(__dirname + '/handlers/' + handlerName + '.js'),
	handler = new HandlerClass(handlerOpts);

	return function (req, res, next) {
		var sid = null;

		if (req.cookies && req.cookies[sidName]) {
			sid = req.cookies[sidName];
		} else if (req.query[sidName]) {
			sid = req.query[sidName];
		} else if(req.body){
			sid = req.body[sidName];
		}

		// Stop if there's no session ID
		if (!sid) {
			return next();
		}

		handler.getSession(sid).then(function(session) {
			req.session = session;
			return next();
		}).catch(function(e) {
			req.sessionError = e;
			return next();
		});
	};
};
