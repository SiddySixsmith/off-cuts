import React from "react";
import { useQuery } from "@apollo/client";
import ProductList from "../allProductList";
import { QUERY_PRODUCTS } from "../../utils/queries";
import "../../styles/pages.css";

const AllProducts = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const products = data?.products || [];

  return (
    <div className="flex-row justify-center allProductsContainer">
      <div>
        <h1>All products</h1>
      </div>
      <div className="col-12 col-md-8 mb-3">
        {loading ? (
          <div>loading...... </div>
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </div>
  );
};

export default AllProducts;
