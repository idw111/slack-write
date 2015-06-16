var querystring = require('querystring');
var request = require('request');

var slack = {
	
	write: function(text, options, done) {
		slack.post(text, options, done);
	},

	post: function(text, options, done) {
		var params = {
			token: options.token, 
			channel: options.channel, 
			username: options.username,
			text: text
		};
		var url = 'https://slack.com/api/chat.postMessage?' + querystring.stringify(params);
		request.get({url: url, json: true}, function(err, res, result) {
			return done(err, result);
		});
	}

};

module.exports = slack;
