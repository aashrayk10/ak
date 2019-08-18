// curl -k -b '_littlecloud_session=1e4e6315500421bc55c3005dc486825b' "Content-Type: application/json" -X POST https://incontrol2.peplink.com/r/api/logout
var request=require(request);
//wrong curl


var dataString = '{"instantActive":true,"list":[{"connId":2,"priority":2,"enable":true}]}';
var headers = {
    'Content-Type': 'application/json',
    'Cookie': '_littlecloud_session=1e4e6315500421bc55c3005dc486825b'
};
    var options = {
        url: 'https://incontrol2.peplink.com/r/api/logout',
        method: 'POST',
        headers: headers,
        body: dataString
    };
 

    function callback(error,response,body)
    {
        if(!error&&response.statusCode==200)
        {
            console.log(body);
        }
    }
    request(options,callback);


