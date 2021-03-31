var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/fitasample";
//one data insert
function findOne(){
  MongoClient.connect(url,  { useUnifiedTopology: true },function(err, db) {
    var dbo =  db.db("fitasample");
    var query =  {"_id":"605495583f4100cda3a99ce4"}
    //var query = {name:"dfgdfgdf"};
      dbo.collection("user").findOne(query,function(err,res){
          if(err)throw err;
          console.log(res);
          db.close();
       })
   });
}
function findManyData(){
  MongoClient.connect(url,  { useUnifiedTopology: true },function(err, db) {
    var dbo =  db.db("fitasample");
    //dbo.collection("user").findOne()
    
    dbo.collection("user").find().sort({name:1}).toArray(function(err,res){
      if(err)throw err;
      console.log(res);
      db.close();
    });
    
   });
}
findOne();
//findManyData();