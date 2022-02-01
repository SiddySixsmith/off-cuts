import React from "react";
import { useQuery } from "@apollo/client";
import CatergoryList from "../catergoryList";
import { QUERY_CATERGORYS } from "../../utils/queries";
import "../../styles/pages.css";


const FindCatergory = () => {
    const { loading, data } = useQuery(QUERY_CATERGORYS);

    const catergorys = data?.catergorys || [];

    return (
        <div className="fle`x-row justify-center allProductsContainer">
            <div>
                <h1>All Brands</h1>
            </div>
            <div className="col-12 col-md-8 mb-3">
                {loading ? (
                    < div > loading...... </div>
                ) : (
                    <CatergoryList catergorys={catergorys} />
                )}
            </div>
        </div >
    );
};

export default FindCatergory;
