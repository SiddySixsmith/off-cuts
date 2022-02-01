import React from "react";
import BrandList from "../BrandList";
import { useQuery } from "@apollo/client";
import { QUERY_BRAND } from "../../utils/queries";

const FindBrand = () => {
  const { loading, data } = useQuery(QUERY_BRAND);

  const brands = data?.brands || [];

  return (
    <div className="flex-row justify-center allProductsContainer">
      <div>
        <h1>All Brands</h1>
      </div>
      <div className="col-12 col-md-8 mb-3">
        {loading ? <div>loading...... </div> : <BrandList brands={brands} />}
      </div>
    </div>
  );
};

export default FindBrand;
