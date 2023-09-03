import { connectDatabase, client} from ".";

const db = client.db('Vacancies');

async function getUsers() {
    await connectDatabase(); // Connect to MongoDB
  
    const collection = db.collection('vacanciesCollection');
  
    try{
        if(!collection) await init()
        const data = await collection.find({}).toArray();
        return data
    }catch(error){
        return  error
    }

  }

  async function addUser(love = 'defaultValue') {
    await connectDatabase(); // Connect to MongoDB
  
    const collection = db.collection('vacanciesCollection');
  
    try{

        if( !collection ) await init()
        const data = await collection.insertOne(love);
        return data
        
    }catch(error){
        return  error
    }

  }

  export  {getUsers,addUser}