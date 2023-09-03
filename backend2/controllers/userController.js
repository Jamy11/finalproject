const { ObjectId } = require('mongodb');
const {vacanciesCollection} = require('../database/Connection');

exports.getUsers = async (req, res) => {
    try {
      const cursor = vacanciesCollection.find({});
      const result = await cursor.toArray();
      res.json(result);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };

  exports.updateOrCreateUser = async (req, res) => {
    try {
        const cursor = vacanciesCollection.find({})
        const cursorResult = await cursor.toArray()

        const data = req.body
        const found = cursorResult.some(el => el.email === data.email);
        if (found ){
            let oldData = cursorResult.find(item => item.email === data.email);
            if( JSON.stringify(oldData) === JSON.stringify(data) ){ // same data
                res.json(' Same user')
            }
            else{ // updating exsisiting user 
                try{
                    const filter = { email: data.email };

                    const update = { $set: data }; // Use $set to update specific fields

                    const result = await vacanciesCollection.updateOne(filter, update);
                    // res.json(result)

                    if (result.modifiedCount === 1) {
                        res.json({ message: 'Document updated successfully' });
                      } else {
                        res.status(404).json({ message: 'Document not found or not updated' });
                      }
                }
                catch (error){
                    console.error('Error:', error);
                    res.status(500).json({ error: 'An error occurred' });
                }
            }
        }
        else{ // creating new data
            const result = await vacanciesCollection.insertOne(data)
            res.json(result)
        }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };