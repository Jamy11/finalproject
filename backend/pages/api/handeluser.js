import {getUsers, addUser} from "@lib/mongo/users";


export default async function handler(req, res) {

  if (req.method == 'POST'){
    try {
      const data = req.body; // Use req.query or req.body depending on your needs
    //   const addedUser = await addUser(data); // Use a different variable name
      console.log(data,'dasdsa')
      res.status(200).json(data); // Send the result from addUser

    } catch (error) {
      console.error('Error adding user:', error);
      res.status(500).json({ error: 'Error adding user', detail: error.message });
    }

  }
  if (req.method == 'GET'){
    const getuser = await getUsers()

    res.status(200).json({ text: 'asd',
  value:  getuser});

  }
}