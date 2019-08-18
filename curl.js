// request({
//     uri: "localhost:12060/repository/schema/fieldType",
//     method: "POST",
//     json: {
//       action: "create",
//       fieldType: {
//        user:
//        {
//          email: "avijitghosh@truringsoftek.com",
//          request:"k4"

//        },
//         valueType: { primitive: "STRING" },
//         scope: "versioned",
//         namespaces: { "my.demo": "n" }
//       }
//     }
// });
//  var http = require('http')
// console.log(curl.cmd('http://www.daveeddy.com/something'))

// var options = {
//   hostname: 'incontrol.peplink.com',
//   port: 80,
//   path: '/r/api/login',
//   method: 'POST'
// };


//    ));

// http.request(options, function(res) {
//   console.log('STATUS: ' + res.statusCode);
//   console.log('HEADERS: ' + JSON.stringify(res.headers));
//   res.setEncoding('utf8');
//   res.on('data', function (chunk) {
//     console.log('BODY: ' + chunk);
//   });
// }).end();
var request = require('request');
curl = require('curlrequest');
var dataString = 'user[email]=avijit.ghosh@truringsoftek.com&user[password]=KMobility';

var options = {
    url: 'https://incontrol2.peplink.com/r/api/login',
    method: 'POST',
    body: dataString,
   verbose: true
};



function call(error, response, body) {
       console.log(response);
    if (!error && response.statusCode == 200) {
        console.log(body);
        // console.log(response.set-headers.Cookie);
        //  console.log(response.headers);
        //  console.log(response.headers['set-cookie'][1].split(';')[0]);
    }
}
request(options, call);
