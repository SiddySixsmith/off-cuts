import { gql } from "@apollo/client";

export const QUERY_BRAND = gql`
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
