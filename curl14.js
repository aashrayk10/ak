var request = require('request');
var express=require('express')
var app=express();
var headers = {
    'Content-Type': 'application/json',
    'Cookie': '_littlecloud_session=1ad62a58ceb2ddb7d7ba354fdb287182'
};

var options = {
    url: 'https://mars.ic.peplink.com/ra/remote/2936-65C9-7E56/api/status.wan.connection',
    headers: headers
};
app.get('/',(req,res)=>
{
    function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        var json = JSON.parse(body);
        console.log(json.response);
        // res.send(json.response['1']);
        var answer=
       {
            VSAT1 :
            {
                id: '1',
                type: json.response['1'].type,
                message: json.response['1'].message,
                name: json.response['1'].name,
                enable: json.response['1'].enable
              },
            VSAT2 :
            {
                id: '2',
                type: json.response['2'].type,
                message: json.response['2'].message,
                name: json.response['2'].name,
                enable: json.response['2'].enable
           },
           WANWIFI :
           {
            id: '3',
            type: json.response['3'].type,
            message: json.response['3'].message,
            name: json.response['3'].name,
            enable: json.response['3'].enable,
            statusLED: json.response['3']. statusLed
            },
            Cellular4:
            {
                id: '4',
                type: json.response['4'].type,
                message: json.response['4'].message,
                name: json.response['4'].name,
                enable: json.response['4'].enable,
                statusLED: json.response['4']. statusLed,
                Carriername: json.response['4'].cellular.carrier
             },
             Cellular5:
             {
                 id: '5',
                 type: json.response['5'].type,
                 message: json.response['5'].message,
                 name: json.response['5'].name,
                 enable: json.response['5'].enable,
                 statusLED: json.response['5']. statusLed,
                 Carriername: json.response['5'].cellular.carrier
              },
              getWANportstatus:
              {
                id: '6',
                type: json.response['6'].type,
                message: json.response['6'].message,
                name: json.response['6'].name,
                enable: json.response['6'].enable,
                statusLED: json.response['6']. statusLed
                }
             }

    //  console.log(answer) ;  
      res.send(answer);
    }
}

request(options, callback);
});
app.listen(3004,()=>
{
    console.log('port started at 3000');
})