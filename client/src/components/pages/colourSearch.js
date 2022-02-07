import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import ProductsList from "../allProductList";
import { QUERY_PRODUCT_BY_COLOUR } from "../../utils/queries";
import "../../styles/pages.css";


const ColourSearch = () => {
    const { colour } = useParams();

    const { loading, data } = useQuery(QUERY_PRODUCT_BY_COLOUR,
        { variables: { colour: colour } });

    const history = useHistory();

    const products = data?.colour || [];
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
                <h1>{colour.name} Products</h1>
            </div>
            <div className="col-12 col-md-8 mb-3">
                {loading ? (
                    < div > loading...... </div>
                ) : (
                    <><Button
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
        </div >
    );
};

export default ColourSearch;
