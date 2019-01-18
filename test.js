const expect = require('expect.js');
const slackWrite = require('./index');
const channel = {
    username: 'tester',
    channel: 'C39T210PP',
    token: 'xoxp-111920032133-111126508304-528441100598-0f7d6a45f52c583a905eb17904f473b9'
};
const slack = slackWrite(channel);

describe('slack-write', function() {
    
    it('should be capable of posting a plain text', function(done) {
        slack.write('testing... ' + Date.now(), (err, result) => {
            expect(result).to.be.an('object');
            expect(result.ok).to.be.ok();
            expect(result.message).to.have.keys(['text']);
            return done();
        });
    });

    it('should be capable of posting an attachment', function(done) {
        slack.attach('testing... ' + Date.now(), {
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