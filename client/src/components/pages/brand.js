import React from "react";
import ProductByBrand from "../findByBrand";
import { useQuery } from "@apollo/client";
import { QUERY_BRAND } from "../utils/queries";

const FindBrand = () => {
  const { loading, data } = useQuery(QUERY_BRAND);
  const brands = data?.brands || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            <ProductByBrand
              brands={brands}
              Name="Here's the current roster of friends..."
            />
          )} */}
          <h1>awesomer</h1>
        </div>
      </div>
    </main>
  );
};

export default FindBrand;
