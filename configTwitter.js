const {TwitterApi} = require('twitter-api-v2');

const client = new TwitterApi({
    appKey: 'WrKrXrRm6prjVtC4d9IV6BkvD',
    appSecret: 'qs8p4WXX4xXTL5eIaBFyNXNlBcklvZHicP92zfu2nMnWrvnImC',
    accessToken: '1574646079-G87LeGYvw0mOc7DbbcsX22LcUw4X6zKPLfKYKlv',
    accessSecret: 'wt2Nz5eyNO33b0itRBdeAoqM4KD5jDT2bK3TTc1t05tyl',
});

const rwClient =client.readWrite

module.exports =rwClient

