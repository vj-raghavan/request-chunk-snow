//Load the request module
var request = require('request');
console.log("Running");
var reqParams = {
    method : 'get',
    url : "https://rxpservicekeytest.service-now.com/wm_task_list.do?JSONv2&sysparm_query=active=true^stateIN16,17,18,19,20^ORDERBYDESCsys_updated_on^assignment_group=javascript:FHUserGroups('121a767d4f5b0200ae3720201310c702')^ORDERBYDESCsys_updated_on&displayvalue=true'",
    json : true,
    'auth': {
        'user': 'servicekey.integration',
        'pass': 'DownerIntegration@10'
    },
    timeout : '180000'
}
request(reqParams, function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }
    console.log(body);

});
