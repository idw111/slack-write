var querystring = require('querystring');
var request = require('request');

var slack = {
	
	post: function(text, slack, done) {
		slack = {
			token: 'xoxp-2740269050-2740285888-4808485483-12040d',
			channel: 'C052HSNP2',
			username: 'Test'
		};
		var params = {
			token: slack.token, 
			channel: slack.channel, 
			username: slack.username,
			text: text
		};
		var url = 'https://slack.com/api/chat.postMessage?' + querystring.stringify(params);
		request.get({url: url, json: true}, function() {
			console.log(arguments);
			return done();
		});
	}

};

module.exports = slack;
