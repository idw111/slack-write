#  [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]

> write on slack

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


## License

MIT © [Dongwon Lim]()

[npm-image]: https://badge.fury.io/js/slack-write.svg
[npm-url]: https://npmjs.org/package/slack-write
[travis-image]: https://travis-ci.org/idw111/slack-write.svg?branch=master
[travis-url]: https://travis-ci.org/idw111/slack-write
[daviddm-image]: https://david-dm.org/idw111/slack-write.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/idw111/slack-write
