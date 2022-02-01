const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String!
  }

  type Brand {
    _id: ID
    name: String
    category: [Category]   
  }
  type Product {
    _id: ID
    colour: String
    finish: String
    length: String 
    width: String
    thickness: String 
    productCode: String 
    batchNo: String 
    bayLocation: String
    quantityInStock: String
    price: Float  
    image: String
    stockType: [Category]
    brand: [Brand]
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    phoneNumber: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category!]!
    getCategoryByName(name: String!): [Category!]
    brands: [Brand!]!
    getBrandByName(name: String!): [Brand!]
    products: [Product!]!
    getProductsByColour(colour: String): [Product!]
    users: [User!]
    getUserByName(firstName: String!): [User!]
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, phoneNumber: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, phoneNumber: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;