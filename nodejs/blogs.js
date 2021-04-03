var express = require("express");
var multer  = require('multer');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var url = "mongodb://localhost:27017/fitasample";
//var app = express();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
       // console.log("samle file uploda");
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        var tmp = file.originalname.split(".");
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
     // console.log("samle file uploda ",file);
      var img_name =   file.fieldname + '-' + uniqueSuffix+"."+tmp[1];
      req.body.upload_file_name = img_name;
      cb(null,img_name);
    }
  })
  var upload = multer({ storage: storage });
var router = express.Router();
router.post("/store",upload.single('img'),function(req,res){
    //console.log(req.body);
    let title = req.body.title;
    let content = req.body.content;
    let username = req.body.username;
    let category = req.body.category;
    let img_name = req.body.upload_file_name
    MongoClient.connect(url,  { useUnifiedTopology: true },function(err, db) {
        var dbo =  db.db("fitasample");
        var dataToInsert = {
            "title":title,"content":content,
            "username":username,"category":category,
            "created_date":new Date(),
            "img_name":img_name
        };
        dbo.collection("blog_content").insertOne(dataToInsert,function(err,dbres){
          var result = {
              "message":"insert success"
          }
          res.writeHead(200,{"content-type":"application/json"})
            res.write(JSON.stringify(result));
            res.end();
            db.close();
        });
})
})
router.get("/get",function(req,res){
    
    MongoClient.connect(url,  { useUnifiedTopology: true },function(err, db) {
        var dbo =  db.db("fitasample");
       let queryData = { };
        dbo.collection("blog_content").find(queryData).toArray(function(err,db_res){
            console.log(db_res);
            res.writeHead("200",{"Content-type":"application/json"});
            res.end(JSON.stringify(db_res));
        })
})
})
router.get("/get/pagination",function(req,res){
    let query_param = req.query;
    let page_no = req.query.page_no;
    if(page_no == ""){
        page_no = 0;
    }else {
        //sub tract -1;
        page_no = parseInt(page_no)*2;
    }
    MongoClient.connect(url,  { useUnifiedTopology: true },function(err, db) {
        var dbo =  db.db("fitasample");
       let queryData = {}
        dbo.collection("blog_content").find(queryData).skip(page_no).limit(2).toArray(function(err,db_res){
            console.log(db_res);
            res.writeHead("200",{"Content-type":"application/json"});
            res.end(JSON.stringify(db_res));
        })
})
})
router.get("/get/id",function(req,res){
    let query_param = req.query;
    //console.log(idid);
    
    MongoClient.connect(url,  { useUnifiedTopology: true },function(err, db) {
        var dbo =  db.db("fitasample");
       let queryData = {
           "_id":ObjectId(query_param.id)
       }
        dbo.collection("blog_content").findOne(queryData,function(err,db_res){
          
            console.log(db_res);
           
            res.writeHead("200",{"Content-type":"application/json"});
            res.end(JSON.stringify(db_res));
        })
})
})
router.get("/get/category",function(req,res){
    let category = req.query.cat_name;
    console.log(req.query);
    MongoClient.connect(url,  { useUnifiedTopology: true },function(err, db) {
        var dbo =  db.db("fitasample");
       let queryData = {
           "category":new RegExp("^"+category+"")
       }
       console.log(queryData);
        dbo.collection("blog_content").find(queryData).toArray(function(err,dbres){
            console.log(dbres);
            res.writeHead("200",{"Content-type":"application/json"});
            res.end(JSON.stringify(dbres));
        })
})
})


module.exports = router;