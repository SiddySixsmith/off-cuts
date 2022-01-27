const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Brand {
    _id: ID
    name: String
    category: Category    
  }
  type Product {
    _id: ID
    colour: String
    finish: String
    length: String 
    width: String
    thickness: String 
    price: Float
    product_code: String    
    image: String
    brand: Brand
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
    categories: [Category]
    brands(category: ID, name: String): [Brand]
    brand(_id: ID!): Brand
    products(brand: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, phoneNumber: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, phoneNumber: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;