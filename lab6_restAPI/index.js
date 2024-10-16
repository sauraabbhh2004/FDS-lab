const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());



app.get('/', (req, res) => {{
    res.send('Welcome to rest api!');
}});

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });


let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
];


// Get all users
app.get('/api/users', (req, res) => {
    res.json(users);
  });
  
  // Add a new user
  app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    const newUser = {
      id: users.length + 1, // Automatically assign an ID
      name,
      email,
    };
    users.push(newUser); // Add the new user to the array
    res.json(newUser);
});
  
  // Update a user
app.put('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;
  
    const user = users.find(u => u.id === userId);
  
    if (user) {
      // Update the user details
      user.name = name;
      user.email = email;
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(user => user.id === parseInt(id));

  if (index !== -1) {
      const deletedUser = users.splice(index, 1);
      res.json(deletedUser);
  } else {
      res.status(404).json({ message: 'User not found' });
  }
});
  
  // Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});