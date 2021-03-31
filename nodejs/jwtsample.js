var http = require('http');//including the http module in JS.
var jwt = require("jsonwebtoken");
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMSIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20ifSwiaWF0IjoxNjE2NzYxMTA5LCJleHAiOjE2MTY3NjExMzl9.0KNkY_oGN_K1gIL1TpT7YZGbvTxMvbSallu9IkAAhwI";
let user = {
    "id":"1",
    "email":"test@gmail.com"
 }
jwt.sign({user},"secret-key", { expiresIn: '30s' },function(err,data){
    console.log(data);
});
jwt.verify(token,"secret-key",function(err,res){
    console.log(res);
})
// http.createServer(function(req,res){
//     console.log(req.url);
//     if(req.url == "/getToken"){
        
//     } 
//     if(req.url == "/get_json_data"){
      
//     }
//     //nodeman
    
// }).listen(8082,function(){
//     console.log("server started.")
// });
//80 -->http
//81 ->https
//8080 -->development
//25,537->mail
//-
//22->ftp