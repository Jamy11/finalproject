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
        const database = client.db('Vacancies') // MongoDB Database Name

        const vacanciesCollection = database.collection('vacanciesCollection') // Collect Collection
        const roleCollection = database.collection('role') // Collect Collection
        const companyCollection = database.collection('company') // Collect Collection
        const jobBoardCollection = database.collection('jobBoard') // Collect Collection
        const employeeCollection = database.collection('employee') // Collect Collection
        const categoryCollection = database.collection('category') // Collect Collection
        const jobApplicationCollection = database.collection('jobApplication') // Collect Collection



        app.get('/handeluser', async (req, res) => { // Get All User
            const cursor = vacanciesCollection.find({})
            const result = await cursor.toArray()
            res.json(result)
        })

        app.post('/handeluser', async (req, res) => {
            const cursor = vacanciesCollection.find({})
            const cursorResult = await cursor.toArray()

            const data = req.body
            // const found =await cursorResult.some(el => el.email === data.email);
            const found =await vacanciesCollection.findOne({email: data.email});
            // console.log(found)
            if ( await found) {
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
                delete oldData.userType

                if (_.isEqual(oldData, data)) { // same data
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
                data.userType = 'jobSeeker'
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

        app.get('/view-role', async (req, res) => {
            const cursor = roleCollection.find({})
            const result = await cursor.toArray()
            res.json(result)
        })

        app.post('/view-role', async (req, res) => {
            const cursor = roleCollection.find({})
            const cursorResult = await cursor.toArray()
            const data = req.body
            const found = cursorResult.some(el => el.role === data.role);

            if (found) {
                res.json('Already Added')
            }
            else {
                const result = await roleCollection.insertOne(data)
                res.json(result)
            }

        })

        app.delete('/view-role/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: ObjectId(id) }
            const result = await roleCollection.deleteOne(query)
            res.json(result)
        })

        app.get('/users', async (req, res) => {
            const cursor = vacanciesCollection.find({})
            const result = await cursor.toArray()
            res.json(result)
        })

        app.post('/users', async (req, res) => { // update one
            const id = req.body.id
            const filter = { email: req.body.email };
            const data = { userType: req.body.value }
            const update = { $set: data };
            const result = await vacanciesCollection.updateOne(filter, update);
            if (result.modifiedCount === 1) {
                res.json({ message: 'Document updated successfully' });
            } else {
                res.status(404).json({ message: 'Document not found or not updated' });
            }
        })

        app.get('/checktype', async (req, res) => {
            const email = req.query.email;
            const user = await vacanciesCollection.findOne({ email: email });
            if (user) {
                res.json(user.userType);
            } else {
                res.status(404).json({ message: 'User not found' });
            }

        })

        app.get('/inacompany', async (req, res) => { // Check if user is in a company or not
            const email = req.query.email;
            const cursor1 = await companyCollection.find({ email: email });
            const result1 = await cursor1.toArray()
            const cursor2 = await employeeCollection.find({ email: email });
            const result2 = await cursor2.toArray()


            if (result1.length > 0 || result2.length > 0) {
                res.json(true);
            } else {
                res.json(false)
            }
        })

        // Company Apis
        {
            app.post('/company', async (req, res) => { // create company and its first employee
                const data = req.body
                const employee = {
                    name: data.fullName,
                    email: data.email,
                    companyName: data.name
                }
                delete data.fullName
                const checkDuplicateValue = await companyCollection.findOne({ name: data.name });
                // console.log(checkDuplicateValue ? true : false)
                if ( !checkDuplicateValue) {
                    const result = await companyCollection.insertOne(data)
                    const result2 = await employeeCollection.insertOne(employee)

                    if (result.acknowledged && result2.acknowledged) {
                        res.json(true)
                    }
                }
                else {
                    res.json(false)
                }


            })

            app.get('/companylist', async (req, res) => { // get company list only name
                const email = req.query.email;
                const cursor = await companyCollection.find({ email: email });
                const result = await cursor.toArray()
                const companyLstArray = result.map(item => item.name)
                res.json(companyLstArray)
            })
        }

        // category apis
        {
            app.get('/category', async (req, res) => { // get all category all field
                const cursor = await categoryCollection.find();
                const result = await cursor.toArray()
                res.json(result)
            })

            app.post('/category', async (req, res) => { // Create category
                try {
                    const data = req.body
                    const result = await categoryCollection.insertOne(data)
                    res.json(result)
                }
                catch (err) {
                    res.json(err)
                }

            })

            app.delete('/category/:id', async (req, res) => { // delete Category
                const id = req.params.id
                const query = { _id: ObjectId(id) }
                const result = await categoryCollection.deleteOne(query)
                res.json(result)
            })

            app.get('/categorylist', async (req, res) => { // get categoryList list only name
                const email = req.query.email;
                const cursor = await categoryCollection.find();
                const result = await cursor.toArray()
                const categoryList = result.map(item => item.name)
                res.json(categoryList)
            })
        }

        // Job Board Apis
        {
            app.post('/job-board', async (req, res) => { // Create Jobs
                try {
                    const data = req.body
                    const result = await jobBoardCollection.insertOne(data)
                    // console.job(result)
                    res.json(result)
                }
                catch (err) {
                    res.json(err)
                }

            })

            app.get('/postedjob', async (req, res) => { // Find Job by ID
                const jobId = req.query.id; // Get the job ID from the query parameter
                try {
                    const job = await jobBoardCollection.findOne({ _id: ObjectId(jobId) });

                    if (job) {
                        res.json(job);
                    } else {
                        res.status(404).json({ message: 'Job not found' });
                    }
                } catch (error) {
                    console.error('Error:', error);
                    res.status(500).json({ error: 'An error occurred' });
                }

            })

            app.get('/jobsbyuser', async (req, res) => { // Find Job by email
                const email = req.query.email; // Get the job ID from the query parameter
                try {
                    const job = await jobBoardCollection.find({ email: email });
                    const result = await job.toArray()

                    res.json(result)
                } catch (error) {
                    console.error('Error:', error);
                    res.status(500).json({ error: 'An error occurred' });
                }
            })

            app.delete('/jobsbyuser/:id', async (req, res) => { // delete job by id
                const id = req.params.id
                const query = { _id: ObjectId(id) }
                const result = await jobBoardCollection.deleteOne(query)
                res.json(result)
            })

            app.get('/feeds', async (req, res) => { // get All Jobs
                const cursor = await jobBoardCollection.find()
                const result = await cursor.toArray()
                res.json(result)
            })
        }

        { // job application
            app.post('/job-application', async (req, res) => { // Create Jobs
                try {
                    const data = req.body
                    const result = await jobApplicationCollection.insertOne(data)
                    // console.job(result)
                    res.json(result)
                }
                catch (err) {
                    res.json(err)
                }
            })

            app.get('/job-application', async (req, res) => { // Find Job by ID
                const jobId = req.query.jobId; // Get the job ID from the query parameter
                const userId = req.query.userId; // Get the job ID from the query parameter

                const job = await jobApplicationCollection.findOne({ jobId: jobId, userId: userId });

                if (job) {
                    res.json(false);
                } else {
                    res.json(true);
                }


            })

            app.get('/job-application-count', async (req, res) => { // Find Job by ID
                const jobId = req.query.jobId; // Get the job ID from the query parameter

                const job = await jobApplicationCollection.find({ jobId: jobId }).toArray();
                res.json(job.length)
            })

            app.get('/applied-people-list', async (req, res) => { // Find Job by ID
                const jobId = req.query.jobId; // Get the job ID from the query parameter

                const job = await jobApplicationCollection.find({ jobId: jobId }).toArray();
                const userIds = job.map(item => ObjectId(item.userId));
                const users = await vacanciesCollection.find({ _id: { $in: userIds } }).toArray();
                res.json(users)
            })
        }
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