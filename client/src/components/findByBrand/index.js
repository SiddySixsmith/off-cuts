import React from "react";
const brand = ["brand 1", "brand 2", "brnad 3"];
const RenderBrand = () => {
  return (
    <div>
      {brand.map((Item, key) => (
        <Item key={key} />
      ))}
    </div>
  );
};

const ProductByBrand = ({ brand }) => {
  if (!brand.length) {
    return <h3>Current No Brand Exists please go back to home page</h3>;
  }

  return (
    <div>
      aweseome
      <RenderBrand />
    </div>
  );
};

export default ProductByBrand;
