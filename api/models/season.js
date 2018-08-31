const mongoose = require('mongoose');

const seasonSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  season_number: {type: Number},
  name: {type: String},
  number_of_episodes: {type: Number},
  episodes: {
    type: Object,
    _id: mongoose.Schema.Types.ObjectId,
    episode_number: {type: Number},
    name: {type: String},
    length: {type: String},
    author: {type: String},
    release: {type: Date},
    description: {type: String}
  }  
})

module.exports = mongoose.model('season', seasonSchema);