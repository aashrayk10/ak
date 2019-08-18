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

app.get('/enable/nameofDevice/:devicename/WANid/:g',(req,res)=>
{
function call(error, response, body) {
    // console.log(response);
    if(response.statusCode!==200)
    {
        res.send('Unsuccessful');
    }
    if (!error && response.statusCode == 200) {
        console.log(body);
    }

    var headers = {
        'Content-Type': 'application/json',
        'Cookie': response.headers['set-cookie'][1].split(';')[0]
    };
    if((req.params.g)==1||(req.params.g)==2)
    {
        priority=3;
    }
    
    var dataString1 = `{"instantActive":true,"list":[{conn id:${req.params.g},priorty=${priority},"enable":true}]}`;
    
    var options1 = {
        url: `https://mars.ic.peplink.com/ra/remote/${req.params.devicename}/api/config.wan.connection.priority`,
        method: 'POST',
        headers: headers,
        body: dataString1
    };
    console.log(headers);
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
             console.log(options1);
             console.log(body);
             res.send(body);
          
        }
    }
    
    
request(options1, callback);
}

request(options, call);
});
app.listen(3000,()=>
{
    console.log('started at port 3000');
});