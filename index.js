var querystring = require('querystring');
var request = require('request');

function slackWrite(options) {

	options = options || {};
	if (!options.token || !options.channel) console.warn('token and channel are required');
	if (!options.username) options.username = 'slack-write';

	var slack = {

		options,

		write: function(text, done) {
			slack.post(text, options, done);
		},

		post: function(text, _options, done) {
			var params = {
				token: _options.token,
				channel: _options.channel,
				username: _options.username,
				text: text
			};
			var url = 'https://slack.com/api/chat.postMessage?' + querystring.stringify(params);
			request.get({url: url, json: true}, function(err, res, result) {
				return done(err, result);
			});
		}

	};

	return slack;

}

module.exports = slackWrite;
