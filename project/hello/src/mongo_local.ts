import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
client.connect(err => {
  const collection = client.db("mydb").collection("tso");
  collection.find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    client.close();
  });
});

