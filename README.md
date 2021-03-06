# [![NPM version][npm-image]][npm-url] [![dependencies Status][daviddm-image]][daviddm-url]
> write on slack


## Usage
1. Add a slackbot integration, and get a token ([https://your-team-name.slack.com/services/new/slackbot](https://your-team-name.slack.com/services/new/slackbot))
2. Get a channel id from slack ([https://api.slack.com/methods/channels.list/test](https://api.slack.com/methods/channels.list/test))
3. You can pass anything to username
4. You can use slack message formatting ([https://api.slack.com/docs/formatting](https://api.slack.com/docs/formatting))


## Example
```javascript
var slackWrite = require('slack-write');
var channel = {
	token: 'slack-bot-token',
	channel: 'CXXXXXXX',
	username: 'bot-name'
};
var slack = slackWrite(channel);

// write plain text
slack.write('Some text', function(err, result) {
	console.log(err, result);
});

// post a single attachment
slack.attach('ignored text', {
	pretext: 'pretext',
	title: 'attachment title',
	text: 'some texts following title'
}, function(err, result) {
	console.lgo(err, result);
});
```

## License

MIT © [Dongwon Lim](idw111@gmail.com)

[npm-image]: https://img.shields.io/npm/v/slack-write.svg
[npm-url]: https://npmjs.org/package/slack-write
[daviddm-image]: https://david-dm.org/idw111/slack-write/status.svg
[daviddm-url]: https://david-dm.org/idw111/slack-write
