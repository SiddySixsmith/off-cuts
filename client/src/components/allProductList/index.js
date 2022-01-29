import React from "react";

const ProductsList = ({ products }) => {
  if (!products.length) {
    return <h3>No products at the moment</h3>;
  }

  return (
    <div>
      <h3>{products.name}</h3>
      {products &&
        products.map((product) => (
          <div key={product._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {product.thoughtAuthor} <br />
              <span style={{ fontSize: "1rem" }}>
                had this product on {product.createdAt}
              </span>
            </h4>
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
