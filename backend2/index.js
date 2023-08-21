const express = require('express');
const { CommandStartedEvent } = require('mongodb');
const { MongoClient } = require('mongodb');
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 50000;
const ObjectId = require('mongodb').ObjectId
const _ = require('lodash');

// middleware
app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.MONGO_DB_USER_NAME}:${process.env.MONGO_DB_PASS}@cluster0.3fsfu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect()
        const database = client.db('Vacancies')
        const vacanciesCollection = database.collection('vacanciesCollection')



        app.get('/handeluser', async (req, res) => {
            const cursor = vacanciesCollection.find({})
            const result = await cursor.toArray()
            res.json(result)

        })

        app.post('/handeluser', async (req, res) => {
            const cursor = vacanciesCollection.find({})
            const cursorResult = await cursor.toArray()

            const data = req.body
            const found = cursorResult.some(el => el.email === data.email);
            if (found) {
                let oldData = cursorResult.find(item => item.email === data.email);
                delete oldData._id
                delete oldData.bio,
                    delete oldData.city,
                    delete oldData.country,
                    delete oldData.phoneNumber,
                    delete oldData.professionalExperience,
                    delete oldData.state,
                    delete oldData.streetAddress,
                    delete oldData.educationalBackground

                if (_.isEqual(oldData, data) ) { // same data
                    res.json(200)
                }
                else { // updating exsisiting user 
                    try {
                        const filter = { email: data.email };

                        const update = { $set: data }; // Use $set to update specific fields

                        const result = await vacanciesCollection.updateOne(filter, update);

                        if (result.modifiedCount === 1) {
                            res.json({ message: 'Document updated successfully' });
                        } else {
                            res.status(404).json({ message: 'Document not found or not updated' });
                        }
                    }
                    catch (error) {
                        console.error('Error:', error);
                        res.status(500).json({ error: 'An error occurred' });
                    }
                }
            }
            else { // creating new data
                const result = await vacanciesCollection.insertOne(data)
                res.json(result)
            }
        })

        app.post('/updateuser', async (req, res) => {
            const cursor = vacanciesCollection.find({})
            const cursorResult = await cursor.toArray()
            const data = req.body
            const found = cursorResult.some(el => el.email === data.email);

            if (found) {
                let oldData = cursorResult.find(item => item.email === data.email);
                delete oldData._id
                delete oldData.username
                delete oldData.clerkId
                delete oldData.fullName
                delete oldData.userType
                const checkValue = _.isEqual(oldData, data)

                if (checkValue) { // same data
                    res.json(200)
                }
                else {
                    try {
                        const filter = { email: data.email };
                        const update = { $set: data }; // Use $set to update specific fields
                        const result = await vacanciesCollection.updateOne(filter, update);

                        if (result.modifiedCount === 1) {
                            res.json({ message: 'User updated successfully' });
                        } else {
                            res.status(404).json({ message: 'User not found or not updated' });
                        }
                    }
                    catch (error) {
                        console.error('Error:', error);
                        res.status(500).json({ error: 'An error occurred' });
                    }
                }


            }
        })

        app.get('/getuserdatafromdb', async (req, res) => {
            try {
                const email = req.query.email;
                const user = await vacanciesCollection.findOne({ email: email });

                if (user) {
                    res.json(user);
                } else {
                    res.status(404).json({ message: 'User not found' });
                }

            }
            catch (error) {
                console.error('Error:', error);
                res.status(500).json({ error: 'An error occurred' });
            }
        })

        // my orders
        // app.get('/my-orders/:email', async (req,res)=>{
        //     const email = req.params.email
        //     const cursor = orderCollection.find({useremail:email})
        //     const result = await cursor.toArray()
        //     res.json(result) 

        // })

        // app.delete('/my-orders/:id', async (req,res)=>{
        //     const id = req.params.id
        //     const query = {_id : ObjectId(id)}
        //     const result = await orderCollection.deleteOne(query)
        //     res.json(result)
        // })

        // // all orders

        // app.get('/all-orders', async (req,res)=>{
        //     const cursor = orderCollection.find({})
        //     const result = await cursor.toArray()
        //     res.json(result) 

        // })

        // app.delete('/all-orders/:id', async (req,res)=>{
        //     const id = req.params.id
        //     const query = {_id : ObjectId(id)}
        //     const result = await orderCollection.deleteOne(query)
        //     res.json(result)
        // })


        // // order service

        // app.post('/service/order',async (req,res)=>{
        //     const bookedItem = req.body
        //     const result = await orderCollection.insertOne(bookedItem)
        //     res.json(result)
        // })

        // // adding service
        // app.post('/service/add',async (req,res)=>{
        //     const data = req.body
        //     const result = await servicesCollection.insertOne(data)
        //     res.json(result)
        // })
    }
    finally {
        // await client.close()
    }
}

run().catch(console.dir)

app.get('/', (req, res) => {
    res.send('Server is running')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})