// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const port = 3000;
// const app = express();

// app.use(cors());
// app.use(bodyParser.json());



// app.get('/', (req, res) => {{
//     res.send('Welcome to rest api!');
// }});

// // app.listen(port, () => {
// //     console.log(`Server is running on http://localhost:${port}`);
// // });


// let users = [
//     { id: 1, name: 'John Doe', email: 'john@example.com' },
//     { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
// ];


// // Get all users
// app.get('/api/users', (req, res) => {
//     res.json(users);
//   });
  
//   // Add a new user
//   app.post('/api/users', (req, res) => {
//     const { name, email } = req.body;
//     const newUser = {
//       id: users.length + 1, // Automatically assign an ID
//       name,
//       email,
//     };
//     users.push(newUser); // Add the new user to the array
//     res.json(newUser);
// });
  
//   // Update a user
// app.put('/api/users/:id', (req, res) => {
//     const userId = parseInt(req.params.id);
//     const { name, email } = req.body;
  
//     const user = users.find(u => u.id === userId);
  
//     if (user) {
//       // Update the user details
//       user.name = name;
//       user.email = email;
//       res.json(user);
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
// });

// app.delete('/api/users/:id', (req, res) => {
//   const { id } = req.params;
//   const index = users.findIndex(user => user.id === parseInt(id));

//   if (index !== -1) {
//       const deletedUser = users.splice(index, 1);
//       res.json(deletedUser);
//   } else {
//       res.status(404).json({ message: 'User not found' });
//   }
// });
  
//   // Start the server
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Import mongoose

const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a schema for users
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

// Create a model for users
const User = mongoose.model('User', userSchema);

// Route to check server status
app.get('/', (req, res) => {
    res.send('Welcome to rest api!');
});

// Get all users from MongoDB
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new user to MongoDB
app.post('/api/users', async (req, res) => {
    const { name, email } = req.body;
    const newUser = new User({ name, email });

    try {
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a user in MongoDB
app.put('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.name = req.body.name;
        user.email = req.body.email;
        const updatedUser = await user.save();

        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a user from MongoDB
app.delete('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        await user.remove();
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
