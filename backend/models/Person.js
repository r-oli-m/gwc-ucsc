const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  'Timestamp': {type: Date, required: true},
  'Email Address': { type: String, required: true },
  'First Name': { type: String, required: true },
  'Middle Name (leave blank if none)': { type: String, required: false },
  'Last Name': { type: String, required: true },
  'Profile Pic': { type: String, required: true },
  'Role (Member or specify Officer role)': { type: String, required: true },
  'LinkedIn URL': { type: String, required: true }
});

const Person = mongoose.model('Person', personSchema, 'profile_records');

module.exports = Person;
