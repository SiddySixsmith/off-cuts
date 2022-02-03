import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import BrandList from "../brandList";
import { QUERY_BRANDS } from "../../utils/queries";
import "../../styles/pages.css";


const FindBrand = () => {
  const { loading, data } = useQuery(QUERY_BRANDS);

  const history = useHistory();

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
            <BrandList brands={brands} />
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

export default FindBrand;
