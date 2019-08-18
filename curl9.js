var request = require('request');

var headers = {
    'Content-Type': 'application/json',
    'Cookie': '_littlecloud_session=762e082928279231ceac13918460d74e'
};

var dataString = '{"instantActive":true,"list":[{"connId":2,"priority":2,"enable":true}]}';

var options = {
    url: 'https://mars.ic.peplink.com/ra/remote/2936-65C9-7E56/api/config.wan.connection.priority',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
