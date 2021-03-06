import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $phoneNumber: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber, email: $email, password:  $password) {
      token
      user {
        _id
        firstName
        lastName
        phoneNumber
        email
        password
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        phoneNumber
      }
    }
  }
`;


export const ADD_ORDER = gql`
  mutation addOrder($products: [ID!]) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        finish
        colour
        stockType{
          name
        }
        brand{
          name
        }
      }
    }
  }`