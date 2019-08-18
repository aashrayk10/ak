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
var WANid={
    type: Number,
    default:null
  
};
var priority={
        type: Number,
        default:null
      
};

app.get('/fetch/:devicename',(req,res)=>
{
function call(error, response, body) {
    // console.log(response);
    if(response.statusCode!==200)
    {
        res.send('Unsuccessful');
    }
    if (!error && response.statusCode == 200) {
    //      console.log(body);
    }

    var headers = {
        'Content-Type': 'application/json',
        'Cookie': response.headers['set-cookie'][1].split(';')[0]
    };
    // if(ii==1||ii==2)
    // {
    //     priority=3;
    // }
    //  else if(ii==3)
    //  {
    //      priority=1;
    //  }
    //  else if(ii==4||ii==5)
    //  {
    //      priority=2;
    //  }    
    //  else
    //  {
    //      res.send('Illegal WANId');
    //  }
    // var dataString1 = `{"instantActive":true,"list":[{conn id:${req.params.g},priorty=${priority},"enable":true}]}`;
    
    var options1 = {
   //  url: `https://mars.ic.peplink.com/ra/remote/${req.params.devicename}/api/config.wan.connection.priority`,
         url: `https://mars.ic.peplink.com/ra/remote/${req.params.devicename}/api/status.wan.connection`,
        // method: 'POST',
        headers: headers,
        // body: dataString1
    };
    // console.log(headers);
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            //   console.log(options1);
            //  console.log(body);
            //   for(i=0;i<)
            //  var WAN_Status=
            //  [



            //   ]
             var json = JSON.parse(body);
          
            // res.send(json);
             console.log(json.response.order.length);
             var length = json.response.order.length;
             var c = 1
            let obj = {
                            wan_status:[]
                            // service_status:[],
                            // k4_status:[]
                    }
             for (var i = 1; i <= length; i++)
              {
                let ii = i;
                if(ii==1||ii==2)
                {
                    priority=3;
                }
                 else if(ii==3)
                 {
                     priority=1;
                 }
                 else if(ii==4||ii==5)
                 {
                     priority=2;
                 } 
                 
            console.log(ii.toString(10));
            x=ii.toString(10);

              var obj1 = { 
                  name: json.response[x].name, 
                  priority: priority,
                  state: json.response[x].message,
                  active: json.response[x].enable
                }
            console.log('obj1----',obj1);
            if(json.response[x].type!='modem') 
           {
             obj["wan_status"].push(obj1)
           }
             console.log('obj----',obj);
             
            //  var obj2 = { name: "", 
            //        state: "",
            //        active:""
            //     }
            
            //  obj.service_status.push(obj2)
            
            //  var obj3 = { name: "", 
            //        state: "",
            //        active:""
            //     }
            //  obj.k4_status.push(obj3)
                console.log('c----',c)
                console.log('length--',length)
                console.log('x----',x)


             if (c == length)
              {
                  res.send(obj)
             console.log('obj final----------',obj)}
             c++
            }

         }
        
    var options2 = {
        url: 'https://incontrol2.peplink.com/r/api/logout',
        method: 'POST',
        headers: headers
    };
    function callbac(error, response, body) 
    {
        
        if (!error && response.statusCode==200) {
            // console.log(body);
            // // console.log(options2);
            //  console.log(headers);
        }
    }
    
    request(options2, callbac);

}  
    
request(options1, callback);
}

request(options, call);
});
app.listen(3000,()=>
{
    console.log('started at port 3000');
});
