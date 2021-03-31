var http = require('http');//including the http module in JS.

var jsonData = [
    {
        id:1,
        "user_name":"test user ",
        "city":"chennai"
    },{
        id:2,
        "user_name":"test user 2",
        "city":"chennai2"
    },{
     id:3,
        "user_name":"test user 23",
        "city":"chennai3"
    }
]

http.createServer(function(req,res){
    console.log(req.url);
    if(req.url == "/getuser"){
        res.setHeader('Access-Control-Allow-Origin', '*');
    	res.setHeader('Access-Control-Request-Method', '*');
	    res.setHeader('Access-Control-Allow-Headers', '*');
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end("<h1>sample response for get user...</h1>");
    } if(req.url == "/getcity"){
        res.end("sample responsefor city output");
    }
    if(req.url == "/get_json_data"){
        res.setHeader('Access-Control-Allow-Origin', '*');
    	res.setHeader('Access-Control-Request-Method', '*');
	    res.setHeader('Access-Control-Allow-Headers', '*');
        res.writeHead(200,{"Content-Type":"application/json"})
        res.end(JSON.stringify(jsonData));
    }
    //nodeman
    
}).listen(8082,function(){
    console.log("server started.")
});
//80 -->http
//81 ->https
//8080 -->development
//25,537->mail
//-
//22->ftp