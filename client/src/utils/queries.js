import { gql } from "@apollo/client";

export const QUERY_BRANDS = gql`
  query byBrands {
    brands {
      _id
      name
    }
  }
`;

export const QUERY_PRODUCT_BY_BRAND = gql`
query getProductByBrand ($brandName: String!){
  getProductsByBrand (brand: $brandName){
    _id
		image
		stockType{
			name
		}
    brand {
      name
    }
  	colour
    finish
		length
    width
    thickness
		productCode
		batchNo
    bayLocation
    price
    quantityInStock
	}
}
`

export const QUERY_COLOURS = gql`
query colourList {
  colourList{
    _id
    name
  }
}`

export const QUERY_PRODUCT_BY_COLOUR = gql`
query getProductsByColour ($colour: String!){
  getProductsByColour (colour: $colour){
    _id
		image
    stockType{
			name
		}
    brand {
      name
    }
  	colour
    finish
		length
    width
    thickness
		productCode
		batchNo
    bayLocation
    price
	}
}
`
export const QUERY_PRODUCT_BY_CATEGORY = gql`
query getProductByCategory ($category: String!){
  getProductsByCategory (category: $category){
    _id
		image
		stockType{
			name
		}
    brand {
      name
    }
  	colour
    finish
		length
    width
    thickness
		productCode
		batchNo
    bayLocation
    price
    quantityInStock
	}
}
`

export const QUERY_ORDER = gql`
  query order($id : ID!){
    order(_id: $id){
      _id
      purchaseDate
      products{
        _id
        colour
        finish
        length
        width
        thickness
        price
        productCode
        quantityInStock
        image
        brand{
          name
        }
        stockType{
          name
        }
      }
    }

  }
`


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
      quantityInStock
      image
      brand{
        name
      }
      stockType{
        name
      }
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
      firstName
      lastName
      phoneNumber
      email
      orders
      password
      orders{
        _id
        name
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
query getUserById($_id: ID!) {
  getUserById(_id: $_id) {
    _id
    firstName
    lastName
    phoneNumber
    email
    orders{
      _id
      name
    }
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
      quantityInStock
      brand{
        name
      }
      stockType{
        name
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;


