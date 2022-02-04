import { gql } from "@apollo/client";

export const QUERY_BRANDS = gql`
  query byBrands {
    brands {
      _id
      name
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query allProducts {
    products {
      _id
      colour
      finish
      length
      width
      thickness
      price
      productCode
      image
    }
  }
`;

export const QUERY_CATEGORIES = gql`
query byCatergory{
  categories {
    _id
    name
  }
}
`;

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      firstname
      lastNam
      phoneNumber
      email
      password
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($_Id: ID!) {
    user(_Id: $_id) {
      _id
      firstname
      lastNam
      phoneNumber
      email
      password
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      skills
    }
  }
`;
export const QUERY_SINGLE_PRODUCT = gql`
  query singleProduct($_id: ID!) {
    product(_id: $_id) {
      _id
      colour
      finish
      length
      width
      thickness
      price
      productCode
      image
    }
  }
`;

