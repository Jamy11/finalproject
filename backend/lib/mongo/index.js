const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.MONGO_DB_USER_NAME}:${process.env.MONGO_DB_PASS}@cluster0.3fsfu.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function connectDatabase() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
connectDatabase().catch(console.dir);

export { connectDatabase, client }