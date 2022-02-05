import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import SingleProduct from "../singleProduct";
import { QUERY_SINGLE_PRODUCT } from "../../utils/queries";
import "../../styles/pages.css";

const SingleProductSearch = () => {

    const { _id } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_PRODUCT, {
        variables: { _id: _id }
    });

    const product = data?.product || [];

    return (
        <div className="flex-row justify-center allProductsContainer">
            <div>
                <h1>{product.colour}</h1>
            </div>
            <div className="col-12 col-md-8 mb-3">
                {loading ? (
                    <div>loading...... </div>
                ) : (
                    <SingleProduct product={product} />

                )}
            </div>
        </div>
    );
};

export default SingleProductSearch;
