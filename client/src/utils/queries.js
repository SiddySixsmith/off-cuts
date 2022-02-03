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
      quantityInStock
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

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
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
    products(_id: $_id) {
      colour
      finish
      length
      width
      thickness
      price
      productCode
      image
      quantityInStock
    }
  }
`;

