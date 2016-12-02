const expect = require('expect.js');
const slackWrite = require('./index');
const channel = {
    username: 'tester',
    channel: 'C39T210PP',
    token: 'xoxp-111920032133-111126508304-111160012369-8faa4f3a3beba5d72c16ee698ddd4270'
};
const slack = slackWrite(channel);

describe('slack-write', function() {
    

    it('should be capable of posting a plain text', function(done) {
        slack.write('testing...', (err, result) => {
            expect(result).to.be.an('object');
            expect(result.ok).to.be.ok();
            expect(result.message).to.have.keys(['text']);
            return done();
        });
    });

    it('should be capable of posting an attachment', function(done) {
        slack.attach('testing...', {
            pretext: 'pretext',
            title: 'title',
            text: 'text'
        }, (err, result) => {
            expect(result).to.be.an('object');
            expect(result.ok).to.be.ok();
            expect(result.message).to.have.keys(['attachments']);
            return done();
        });
    });

});