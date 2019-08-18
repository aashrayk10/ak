var request = require('request');

var headers = {
    'Content-Type': 'application/json',
    'Cookie': '_littlecloud_session=1e7694af089e8e9eb61f67e3290f8ea5'
};

var dataString = '{"instantActive":true,"list":[{"connId":2,"enable":false}]}';

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
