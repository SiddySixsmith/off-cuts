import React from "react";
import { useQuery } from "@apollo/client";
import CategoryList from "../catergoryList";
import { QUERY_CATEGORIES } from "../../utils/queries";
import "../../styles/pages.css";


const FindCatergory = () => {
    const { loading, data } = useQuery(QUERY_CATEGORIES);

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
                    <CategoryList catergories={categories} />
                )}
            </div>
        </div >
    );
};

export default FindCatergory;
