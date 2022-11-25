import { MongoClient } from 'mongodb';

//const mongoConnectionString = `mongodb+srv://${mongoUser}:${mongoPass}@${mongoClusterName}/${mongoDbName}?retryWrites=true`;
const uri = "mongodb+srv://tsodb:tsopassword@cluster0.8mht0.mongodb.net/mydb?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect(err => {
  const collection = client.db("mydb").collection("tso");
  collection.find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    client.close();
  });
});

