var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/fitasample";
//one data insert

  MongoClient.connect(url,  { useUnifiedTopology: true },function(err, db) {
    var dbo =  db.db("fitasample");
    //dbo.collection("user").findOne()
    // var data = {
    //   "name":"from node js ",
    //   "city":"chennai"
    // }
    dbo.collection("user").updateOne({"_id":"605495153f4100cda3a99ce3"},{$set:{"name":"id update name"}},function(err,res){
        if(err){
          console.log(err);
          throw err;
        }
      console.log("updated...");
      db.close();
    })
      
   });