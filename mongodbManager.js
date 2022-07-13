const {mongoClient, MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = "residents";
const client = new MongoClient(url);

async function dbConnect() {
     let result = await client.connect();
     let db = result.db(database);
     return db.collection('residents');
}

module.exports = dbConnect;