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
          <CardGroup className="cardGroup" key={product._id} >
            <Link to={`/single-product/${product._id}`}>
              <Card className="productCard">
                <Card.Header className="productCardHeader"   >
                  {product.colour}
                </Card.Header>
                <Card.Body> 
                    <img 
                        className="small" 
                        src={product.image} 
                        alt={product.colour}
                        height= "150"
                        width="150">
                    </img> 
                </Card.Body>
                <Card.Text >
                    {product.stockType.name}<br />
                </Card.Text>                
                <Card.Text >
                    Colour: {product.brand.name} {product.colour} {product.finish}<br />
                </Card.Text>
                <Card.Text>
                    Length: {product.quantityInStock > 0 ? product.quantityInStock : product.length} x {product.width} x {product.thickness}<br />
                </Card.Text>
                <Card.Text>
                    Price: {product.price}<br />
                </Card.Text>
                {/* <Card.Body> Image </Card.Body>
                <Card.Text >
                  Finish: {product.brand.finsh}<br />
                </Card.Text>
                <Card.Text>
                  Price: {product.price}<br />
                </Card.Text>
                <Card.Text>
                  Brand: {product.brand.name}<br />
                </Card.Text>
                <Card.Text>
                  Category: {product.stockType.name}<br />
                </Card.Text> */}

              </Card>
            </Link>
          </CardGroup>
        ))}
    </Container>
  );
};

export default ProductsList;
