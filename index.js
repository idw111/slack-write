var querystring = require('querystring');
var request = require('request');

function slackWrite(options) {

	options = options || {};
	if (!options.token || !options.channel) console.warn('token and channel are required');
	if (!options.username) options.username = 'slack-write';

	var slack = {

		options,

		write: function(text, done) {
			slack.post('', text, '', options, done);
		},

		attach: function(title, text, pretext, done) {
			slack.post(title, text, pretext, options, done);
		},

		post: function(title, text, pretext, _options, done) {
			var params = _options;
			if (!title || !pretext) {
				params['text'] = text;
			}
			else {
				params['attachments'] = [{title: title, text: text, pretext: pretext}];
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
