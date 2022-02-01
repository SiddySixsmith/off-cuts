import { gql } from "@apollo/client";

export const QUERY_BRANDS = gql`
  query byBrands {
    brand {
      _id
      name
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query allProducts {
    product {
      _id
      color
      finish
      length
      width
      thickness
      price
      product_Code
      image
    }
  }
`;

export const QUERY_CATERGORYS = gql`
query byCatergory{
  catergory {
    _id
    name
  }
}
`

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