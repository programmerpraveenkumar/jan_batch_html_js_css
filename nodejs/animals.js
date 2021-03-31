var express = require("express");
//var app = express();
var router = express.Router();

router.get("/",function(req,res){
    res.end("server reponse for animals");
})
router.get("/lion",function(req,res){
    res.end("server reponse for lion");
})
router.get("/tiger",function(req,res){
    res.end("server reponse for tiger");
})

module.exports = router;