var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/fitasample";
//one data insert
function oneInsert(){
  MongoClient.connect(url,  { useUnifiedTopology: true },function(err, db) {
    var dbo =  db.db("fitasample");
    //dbo.collection("user").findOne()
    var data = {
      "name":"from node js ",
      "city":"chennai"
    }
    dbo.collection("user").insertOne(data);
    
   });
}
function insertMany(){
  MongoClient.connect(url,  { useUnifiedTopology: true },function(err, db) {
    var dbo =  db.db("fitasample");
    //dbo.collection("user").findOne()
    var data = [{
      "name":"bashyam ",
      "city":"chennai"
    },{
      "name":"kannan",
      "city":"chennai"
    }]
    dbo.collection("user").insertMany(data);
    
   });
}
insertMany();
//insertOne()