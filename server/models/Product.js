const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  colour: {
    type: String,
    required: true,
    trim: true
  },
  finish: {
    type: String
  },
  length: {
    type: Number
  },
  width: {
    type: Number
  },
  thickness: {
    type: Number
  },    
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  product_Code: {
    type: Number,
    min: 0,
    default: 0
  },  
  image: {
    type: String
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
