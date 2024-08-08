const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  linkedin: { type: String, required: true },
  imagePath: { type: String, required: true }, // If you decide to store image paths
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
