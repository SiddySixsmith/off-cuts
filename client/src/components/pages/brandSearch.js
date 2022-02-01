import React from "react";
import { useQuery } from "@apollo/client";
import BrandList from "../brandList";
import { QUERY_BRANDS } from "../../utils/queries";
import "../../styles/pages.css";


const FindBrand = () => {
  const { loading, data } = useQuery(QUERY_BRANDS);

  const brands = data?.brands || [];

  return (
    <div className="fle`x-row justify-center allProductsContainer">
      <div>
        <h1>All Brands</h1>
      </div>
      <div className="col-12 col-md-8 mb-3">
        {loading ? (
          < div > loading...... </div>
        ) : (
          <BrandList brands={brands} />
        )}
      </div>
    </div >
  );
};

export default FindBrand;
