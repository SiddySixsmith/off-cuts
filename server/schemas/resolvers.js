const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order, Brand } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    // lookup Category
    categories: async () => {
      return await Category.find();
    },
    getCategoryByName: async (parent, { name }) => {
      return Category.findOne({ name });
    },

    // lookup Brand
    brands: async () => {
      const results = await Brand.find().populate(["category"]);

      console.log(results);
      return results;
    },
    getBrandByName: async (parent, { name }) => {
      return Brand.findOne({ name });
    },

    // lookup Product  
    products: async () => {
      return await Product.find().populate(["brand", "stockType"]);
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate(["brand", "stockType"]);
    },
    getProductsByColour: async (parent, { colour }) => {
      const params = colour ? { colour } : {};
      return await Product.find(params).populate("brand").sort({ createdAt: -1 });
    },
    getProductsByBrand: async (parent, { brand }) => {
      return Product.find().populate(["brand", "stockType"])
        .then(res => {

          return res.filter((product) => {
            return product.brand.name === brand;
          })

        })
    },
    getProductsByCategory: async (parent, { category }) => {
      return Product.find().populate(["brand", "stockType"])
        .then(res => {
          console.log(res);
          console.log(category);
          return res.filter((product) => {
            return product.stockType.name === category;
          })

        })
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      };
    },

    // lookup User
    users: async () => {
      return await User.find();
    },
    getUserById: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find(params).sort({ createdAt: -1 });
    },

  },
  Mutation: {
    // addOrder: async (parent, { products }, context) => {

    //   if (context.user) {
    //     const order = new Order({ products });

    //     await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

    //     return order;
    //   }

    //   throw new AuthenticationError('Not logged in');
    // },
    addUser: async (parent, { firstName, lastName, phoneNumber, email, password }) => {
      const user = await User.create({ firstName, lastName, phoneNumber, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  }
};

module.exports = resolvers;
