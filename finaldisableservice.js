var request = require('request');
var { DeviceAuthentication }= require('./mongoconnect.js');
const express =require('express');
var app=express();
curl = require('curlrequest');
var dataString='user[email]=avijit.ghosh@truringsoftek.com&user[password]=K4Mobility';
// var user=[email,]
var options = {
    url: 'https://incontrol2.peplink.com/r/api/login',
    method: 'POST',
    body: dataString,
   verbose: true
};
console.log('options',options);
DeviceAuthentication.find({
        _id:"5d09fddaf581a924407afb85"
    }).then((todos)=>{
    console.log('Todos',todos);
    });
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
         console.log('body',body);
    }
    console.log(response.headers);

    var headers = {
        'Content-Type': 'application/json',
        'Cookie': response.headers['set-cookie'][1].split(';')[0]
    };
    if((req.params.g)==1||(req.params.g)==2)
    {
        priority=3;
    }
     else if((req.params.g)==3)
     {
         priority=1;
     }
     else if((req.params.g)==4||(req.params.g)==5)
     {
         priority=2;
     }    
     else
     {
         res.send('Illegal WANId');
     }
    var dataString1 = `{"instantActive":true,"list":[{conn id:${req.params.g},priorty=${priority},"enable":false}]}`;
    
    var options1 = {
        url: `https://mars.ic.peplink.com/ra/remote/${req.params.devicename}/api/config.wan.connection.priority`,
        method: 'POST',
        headers: headers,
        body: dataString1
    };
    console.log('options1',options1);
     console.log(headers);
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
              console.log(options1);
             console.log(body);
             res.send(body);
          
        }
    var options2 = {
        url: 'https://incontrol2.peplink.com/r/api/logout',
        method: 'POST',
        headers: headers
    };
    function callbac(error, response, body) 
    {
        
        if (!error && response.statusCode==200) {
            console.log(body);
            // console.log(options2);
             console.log(headers);
        }
    }
    
    request(options2, callbac);

}  
    
request(options1, callback);
}

request(options, call);
});
app.listen(3001,()=>
{
    console.log('started at port 3000');
});
