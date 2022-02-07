const mongoose = require('mongoose');

const { Schema } = mongoose;

const colourListSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const ColourList = mongoose.model('ColourList', colourListSchema);

module.exports = ColourList;