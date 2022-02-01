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
  productCode: {
    type: Number,
    min: 0,
    default: 0
  },  
  BatchNo: {
    type: Number,
    min: 0,
    default: 0
  },   
  image: {
    type: String
  },
  StockType: {
    type: Schema.Types.ObjectId,
    ref: 'Categoies',
    required: true
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    required: true
  },
  bayLocation: {
    type: String
  },
  quantityInStock: {
    type: Number,  
    min: 1  
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
