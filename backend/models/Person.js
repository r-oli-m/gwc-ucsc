const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  time: {type: Date, required: true},
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  middleName: { type: String, required: false },
  lastName: { type: String, required: true },
  profilePic: { type: String, required: true },
  role: { type: String, required: true },
  linkedin: { type: String, required: true }
});

const Person = mongoose.model('Person', personSchema, 'profile_records');

module.exports = Person;
