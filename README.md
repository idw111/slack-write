## Usage
1. Add a slackbot integration, and get a token (https://your-team-name.slack.com/services/new/slackbot)
2. Get a channel id from slack
3. You can pass anything to username
4. You can use slack message formatting (https://api.slack.com/docs/formatting)

## Example
```javascript
var slack = require('slack-write');
var options = {
	token: 'slack-bot-token',
	channel: 'CXXXXXXX',
	username: 'Writer Name'
};
slack.write('Some text', options, function(err, result) {
	console.log(err, result);
});
```
