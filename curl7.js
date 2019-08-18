var request = require('request');

var dataString = 'user[email]=avijit.ghosh@truringsoftek.com&user[password]=K4Mobility';

var options = {
    url: 'https://incontrol2.peplink.com/r/api/login',
    method: 'POST',
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);