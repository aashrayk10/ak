var request = require('request');
const express =require('express');
var app=express();
curl = require('curlrequest');
var dataString = 'user[email]=avijit.ghosh@truringsoftek.com&user[password]=K4Mobility';

var options = {
    url: 'https://incontrol2.peplink.com/r/api/login',
    method: 'POST',
    body: dataString,
   verbose: true
};

var devicename='2936-65C9-7E56';
var WANid={
    type: Number,
    default:null
  
};
var priority={
        type: Number,
        default:null
      
};
priority=1;
app.get('/',(req,res)=>
{
function call(error, response, body) {
    // console.log(response);
    if (!error && response.statusCode == 200) {
        console.log(body);
        res.send(body);       // console.log(response);
    }

    var headers = {
        'Content-Type': 'application/json',
        'Cookie': response.headers['set-cookie'][1].split(';')[0]
    };
    
    var dataString1 = `{"instantActive":true,"list":[{conn id:${WANid}:2,priorty=${priority},"enable":true}]}`;
    
    var options1 = {
        url: `https://mars.ic.peplink.com/ra/remote/${devicename}/api/config.wan.connection.priority`,
        method: 'POST',
        headers: headers,
        body: dataString1
    };
    console.log(headers);
    // res.send(headers);
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(options1);
            // res.send(options1)
              console.log(body);
            //    res.send(body);
            // console.log(response);
        }
    }
    
    
request(options1, callback);


request(options, call);
};
app.listen(3000,()=>
{
    console.log('started at port 3000');
});
// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(options1);
//         //  console.log(body);
//         // console.log(response);
//     }
// }
// main enabler
