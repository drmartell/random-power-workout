const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  exercise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exercise',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String
  },
  notes: {
    type: String
  }
});

module.exports = mongoose.model('Bout', schema);
