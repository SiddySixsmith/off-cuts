import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import CategoryList from "../catergoryList";
import { QUERY_CATEGORIES } from "../../utils/queries";
import "../../styles/pages.css";


const FindCatergory = () => {
    const { loading, data } = useQuery(QUERY_CATEGORIES);

    const history = useHistory();

    const categories = data?.categories || [];

    return (
        <div className="flex-row justify-center allProductsContainer">
            <div>
                <h1>All Brands</h1>
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
                        <CategoryList catergories={categories} />
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
                    </>
                )}
            </div>
        </div >
    );
};

export default FindCatergory;
