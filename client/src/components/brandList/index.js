import React from "react";
import "../../styles/pages.css";
const BrandList = ({ brands }) => {
  if (!brands.length) {
    return (
      <div className="noProducts">
        <h3>No Brands at the moment</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>Brands</h3>
      {brands &&
        brands.map((brand) => (
          <div key={brand._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {brand.name}
            </h4>
          </div>
        ))}
    </div>
  );
};

export default BrandList;
