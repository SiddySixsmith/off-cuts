import React from "react";
import "../../styles/pages.css";
const ProductsList = ({ products }) => {
  if (!products.length) {
    return (
      <div className="noProducts">
        <h3>No products at the moment</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>{products.name}</h3>
      {products &&
        products.map((product) => (
          <div key={product._id} className="card mb-3">
            <div className="card-body bg-light p-2">
              <p>{product.color}</p>
              <p>{product.finish}</p>
              <p>{product.length}</p>
              <p>{product.width}</p>
              <p>{product.thickness}</p>
              <p>{product.price}</p>
              <p>{product.product_Code}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductsList;
