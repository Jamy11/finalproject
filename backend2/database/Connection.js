const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.MONGO_DB_USER_NAME}:${process.env.MONGO_DB_PASS}@cluster0.3fsfu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let vacanciesCollection;

async function connectDatabase() {
  try{
    await client.connect()
    const database = client.db('Vacancies')
    vacanciesCollection = database.collection('vacanciesCollection');
  }
  finally{
    // await client.close()
  }

}

connectDatabase().catch(console.dir);

module.exports = {
  vacanciesCollection,
};
