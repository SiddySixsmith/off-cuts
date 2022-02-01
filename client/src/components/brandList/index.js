import React from "react";
import { Card, Container, CardGroup } from "react-bootstrap";
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
    <Container className="productlistContainer">
      {brands &&
        brands.map((brand) => (
          <CardGroup className="cardGroup" >
            <Card key={brands._id} className="productCard">
              <Card.Header  >
                {brand.name}
              </Card.Header>
            </Card>
          </CardGroup>
        ))}
    </Container>
  );
};

export default BrandList;
