import React from "react";
import { Button, Card, Container, CardGroup } from "react-bootstrap";
import { useParams, useHistory, Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCT_BY_BRAND } from "../../utils/queries";
import "../../styles/pages.css";
import ProductsList from "../allProductList";



const BrandSearch = () => {
    const { brandName } = useParams();

    const { loading, data } = useQuery(QUERY_PRODUCT_BY_BRAND, {
        variables: { brandName: brandName }
    });

    const history = useHistory();

    const products = data?.getProductsByBrand || [];
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
                <h1>{brandName} Products</h1>
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
                        <br />
                        <br />
                        <br />
                        <br />
                    </>

                )}
            </div>
        </div>
    );
};

export default BrandSearch;
