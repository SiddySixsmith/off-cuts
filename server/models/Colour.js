const mongoose = require('mongoose');

const { Schema } = mongoose;

const colourSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Colour = mongoose.model('Colour', colourSchema);

module.exports = Colour;