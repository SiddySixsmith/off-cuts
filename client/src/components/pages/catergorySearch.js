import React from "react";
import { Button } from "react-bootstrap";
import { useParams, useHistory } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCT_BY_CATEGORY } from "../../utils/queries";
import "../../styles/pages.css";
import ProductsList from "../allProductList";


const BrandSearch = () => {
    const { category } = useParams();

    const { loading, data } = useQuery(QUERY_PRODUCT_BY_CATEGORY, {
        variables: { category: category }
    });

    const history = useHistory();

    const products = data?.getProductsByCategory || [];
    console.log(products)

    const HandleSecondReturnBtn = () => {
        if (products.length < 8) {
            return null
        }
        return (
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
        )
    }

    return (
        <div className="flex-row justify-center allProductsContainer">
            <div>
                <h1>{category} Products</h1>
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
                        <ProductsList products={products} />
                        <HandleSecondReturnBtn />
                    </>
                )}
            </div>
        </div>
    );
};

export default BrandSearch;
