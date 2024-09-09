require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Person = require('./models/Person');
const nodemailer = require('nodemailer');
const cors = require('cors');
  
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://r-oli-m.github.io']
}));app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));


// Endpoint to get all people
// app.get('/people', async (req, res) => {
//   try {
//     const people = await Person.find();
//     res.json(people);
//   } catch (error) {
//     console.error('Error retrieving people:', error);
//     res.status(500).json({ message: 'Error retrieving people', error });
//   }
// });
app.get('/people', async (req, res) => {
  try {
    const people = await mongoose.connection.db.collection('profile_records').find().toArray(); // Direct MongoDB query
    console.log(people); // This should show your existing data
    res.json(people);
  } catch (error) {
    console.error('Error retrieving people:', error);
    res.status(500).json({ message: 'Error retrieving people', error });
  }
});


// Email backend
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
});

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send(error.toString());
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
