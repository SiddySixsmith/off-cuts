const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order, Brand } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },  

    brands: async () => {
      return await Brand.find();
    },

    products: async () => {
      return await Product.find();
    },
    getProductsByColour: async (parent, { colour }) => {
      const params = colour ? { colour } : {};
      return Product.find(params).sort({ createdAt: -1 });
    },
  },

  Mutation: {
 
  }
};

module.exports = resolvers;
