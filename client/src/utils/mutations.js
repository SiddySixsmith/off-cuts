import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addUser($firstName: String!, $lastName: String!, $phoneNumber: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber, email: $email, password:  $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;