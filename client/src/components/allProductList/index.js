import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, CardGroup } from "react-bootstrap";
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
    <Container className="productlistContainer">
      {products &&
        products.map((product) => (
          <CardGroup className="cardGroup" >
            <Link to={`/single-product/${product._id}`}>
              <Card key={products._id} className="productCard">
                <Card.Header className="productCardHeader"   >
                  {product.colour}
                </Card.Header>
                <Card.Body> Image </Card.Body>
                <Card.Text >
                  Finish: {product.finish}<br />
                </Card.Text>
                <Card.Text>
                  Price: {product.price}<br />
                </Card.Text>
                <Card.Text>
                  Brand: {product.brand}<br />
                </Card.Text>
                <Card.Text>
                  Stock: {product.quantityInStock}<br />
                </Card.Text>
              </Card>
            </Link>
          </CardGroup>
        ))}
    </Container>
  );
};

export default ProductsList;
