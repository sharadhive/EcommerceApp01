const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User'); 
const products = require('./Products');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const mongoDBAtlasURI = 'mongodb+srv://sharadnarzo10:Nwm9q6ESDupF30mJ@cluster0.wnewvoq.mongodb.net/ecommerce';

async function main() {
  try {
    await mongoose.connect(mongoDBAtlasURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('MongoDB Atlas connection error:', err);
  }
}
main();

// Define routes

// app.get('/', async (req, res) => {
//   res.send("I'm here");
// });

// Register user
app.post('/api/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error registering user:', error);

    if (error.code === 11000) {
      // MongoDB duplicate key (unique index) error
      res.status(409).json({ error: 'Email is already registered' });
    } else {
      res.status(500).json({ error: 'Error registering user' });
    }
  }
});


// Login user
app.post('/api/login', async (req, res) => {
 
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (user) {
      // Compare the provided password with the stored hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Error logging in' });
  }
});

app.get('/products', async (req, res) => {
  res.send(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
