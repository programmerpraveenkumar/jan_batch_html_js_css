var http = require('http');//including the http module in JS.

var jsonData = [{
    "username":"test trichy user",
    "id":1,
    "city":"trichy"

},{
    "username":"test chennai user",
    "id":1,
    "city":"chennai"

}];
http.createServer(function(req,res){
    if(req.url == "/get"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end("<h1>This is for get url</h1>");
    }else if(req.url == "/sampledata"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end("<h1>this is for sample data for server url..</h1>");
    }else if(req.url == "/getjsondata"){
       // console.log(JSON.stringify(jsonData));
        res.setHeader('Access-Control-Allow-Origin', '*');
    	res.setHeader('Access-Control-Request-Method', '*');
	    res.setHeader('Access-Control-Allow-Headers', '*');
        res.writeHead(200,{"Content-type":"text/plain"})
        res.end(JSON.stringify(jsonData));
    }
    
}).listen(8080);