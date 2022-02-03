import React from "react";
import { useQuery } from "@apollo/client";
import SingleProduct from "../singleProduct";
import { QUERY_SINGLE_PRODUCT } from "../../utils/queries";
import "../../styles/pages.css";

const SingleProductSearch = () => {
    const { loading, data } = useQuery(QUERY_SINGLE_PRODUCT);

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
                    <SingleProduct product={products} />
                )}
            </div>
        </div>
    );
};

export default SingleProductSearch;
