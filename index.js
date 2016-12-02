var querystring = require('querystring');
var request = require('request');

function slackWrite(options) {

	options = options || {};
	if (!options.token || !options.channel) console.warn('token and channel are required');
	if (!options.username) options.username = 'slack-write';

	var slack = {

		options,

		write: function(text, done) {
			slack.post(text, null, options, done);
		},

		attach: function(text, attachment, done) {
			slack.post(text, [attachment], options, done);
		},

		attachMultiple: function(text, attachments, done) {
			slack.post(text, attachments, options, done);
		}, 

		post: function(text, attachments, _options, done) {
			var params = _options;
			params['text'] = text;
			if (!!attachments) {
				params['attachments'] = JSON.stringify(attachments);
			}
			var url = 'https://slack.com/api/chat.postMessage?' + querystring.stringify(params);
			request.get({url: url, json: true}, function(err, res, result) {
				return done(err, result);
			});
		},

	};

	return slack;

}

module.exports = slackWrite;
