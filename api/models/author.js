const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
  // sets up layout in database (eg tables)
  _id: mongoose.Schema.Types.ObjectId, // serial id, long string ued internally
  name: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('author', authorSchema);