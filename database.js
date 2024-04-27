const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/';
const client = new MongoClient(uri);
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to the database');
    const database = client.db('leaked_numbers');
    const collection = database.collection('shopping_site');
    const documents = await collection.find({
      phoneNumber:
        8521512231
    }).toArray();
    console.log('Documents:', documents);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}
connectToMongoDB();
