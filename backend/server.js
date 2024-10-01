require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Person = require('./models/Person');
const cors = require('cors');
  
const app = express();
const PORT = process.env.PORT || 5001;

app.options('*', cors()); // Preflight handling

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001','https://r-oli-m.github.io', 'https://ucsc-gwc.club', 'https://www.ucsc-gwc.club'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));


// Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));


  app.get('/people', async (req, res) => {
    try {
      const people = await mongoose.connection.db.collection('profile_records').find().toArray();
      if (people.length === 0) {
        return res.status(404).json({ message: "No records found" });
      }
      res.json(people);
    } catch (error) {
      console.error('Error retrieving people:', error);
      res.status(500).json({ message: 'Error retrieving people', error });
    }
  });
  


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
