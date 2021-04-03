var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/fitasample";

var express = require("express");
var app = express();
var animals = require('./animals');
var blogs = require('./blogs');
var jwt = require("jsonwebtoken");
var multer  = require('multer');
app.use(express.json());
var cors = require('cors');
app.use(cors());

app.use('/animal',animals);
app.use('/blog',blogs);
app.use('/static',express.static("uploads/"));
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("samle file uploda");
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        var tmp = file.originalname.split(".");
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      console.log("samle file uploda ",file);
      cb(null, file.fieldname + '-' + uniqueSuffix+"."+tmp[1]);
    }
  })
   
  var upload = multer({ storage: storage });
  var upload1 = multer({ dest: 'uploads1/' })


app.post('/file_upload',upload.single('img'),function(req,res){
   console.log("reque is ",req.body.title+" "+req.body.content);
    console.log("samle file uploda "); res.end("ok");
})
app.post("/login",function(req,res){
    // let email = "test@gmail.com";
    // let password ="password";
    let email = req.body.email;
    let password = req.body.password;

    mongoLogin(email,password,function(status,message){
      
        if(status){
            res.writeHead("200",{"Content-type":"application/json"})
            res.write(JSON.stringify(message));
            res.end();
            }else{
            res.writeHead("400",{"Content-type":"application/json"})
             res.end("Filure LOGIN success");
        }
    })
    
});

app.post("/register",function(req,res){
    let email = "test@gmail.com";
    let password ="password";
    mongoRegister(email,password,function(status,message){
        if(status){
            res.writeHead("200",{"Content-type":"application/json"})
             res.end("Register success");
            // jwt.sign({user},"secret-key", { expiresIn: '30s' },function(err,data){
            //     let token = {
            //         "token":data
            //     }
            //     res.writeHead("200",{"Content-type":"application/json"})
            //     res.end(JSON.stringify(token));
            // });
        }else{
            res.writeHead("400",{"Content-type":"text/html"})
            //res.send("already exist");
            res.end("alrady exist");
        }
    })
})

app.get("/home",function(req,res){

});
app.listen(8082,function(err,res){
    console.log("server started.");
})
function mongoLogin(email,password,_callback){
    MongoClient.connect(url,  { useUnifiedTopology: true },function(err, db) {
        var dbo =  db.db("fitasample");
        var query = {"email":email,"password":password};
          dbo.collection("user").findOne(query,function(err,res){
              if(err){
                _callback(false,"failure");
              }else{
                  let  user = {
                      "email":res['email']
                  }
                jwt.sign({user},"secret-key", { expiresIn: '1h' },function(err,data){
                    let token = {
                        "token":data
                    }
                    _callback(true,token);
                });
                

                db.close();
              }
              //console.log(res);
              
           })
       });
}
function mongoRegister(email,password,_callback){
    MongoClient.connect(url,  { useUnifiedTopology: true },function(err, db) {
        var dbo =  db.db("fitasample");
        //dbo.collection("user").findOne()
        var data = {
          "email":email,
          "password":password
        }
        var query = {"email":email};
        dbo.collection("user").findOne(query,function(err,res){
            if(res == null){
                //insert has tohapen
                dbo.collection("user").insertOne(data);
                _callback(true,"Register success.");
                db.close();
            }else{
              _callback(false,"USER email is exist");
              db.close();
            }
            //console.log(res);
        
         })
        // dbo.collection("user").insertOne(data,function(err,res){
        //     if(err){
        //         _callback
        //     }
        // });
        
       });
}
