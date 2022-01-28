import { gql } from "@apollo/client";

export const QUERY_BRAND = gql`
  query byBrand {
    brand {
      _id
      name
    }
  }
`;
