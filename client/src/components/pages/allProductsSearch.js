import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useQuery } from "@apollo/client";
import ProductList from "../allProductList";
import { QUERY_PRODUCTS } from "../../utils/queries";
import "../../styles/pages.css";


const AllProducts = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const history = useHistory();

  const products = data?.products || [];

  return (
    <div className="flex-row justify-center allProductsContainer">
      <div>
        <h1>All Products</h1>
      </div>
      <div className="col-12 col-md-8 mb-3">
        {loading ? (
          <div>loading...... </div>
        ) : (
          <>
            <Button
              onClick={() => history.goBack()}
              sm="true"
              id="return"
              className="returnBtn"
              variant="primary"
              size="lg"
            >
              Return
            </Button>
            <ProductList products={products} />
            <Button
              onClick={() => history.goBack()}
              sm="true"
              id="return"
              className="returnBtn"
              variant="primary"
              size="lg"
            >
              Return
            </Button></>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
