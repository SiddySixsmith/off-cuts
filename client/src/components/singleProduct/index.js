import React from "react";
import { Card, Container, CardGroup } from "react-bootstrap";
import "../../styles/pages.css";
const SingleProduct = ({ products }) => {
    if (!products) {
        return (
            <div className="noProducts">
                <h3>No products at the moment</h3>
            </div>
        );
    }

    return (
        <Container className="productListContainer">
            {
                (product) => (
                    <CardGroup className="cardGroup" >
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
                                Length: {product.length}<br />
                            </Card.Text>
                            <Card.Text>
                                Width: {product.width}<br />
                            </Card.Text>
                            <Card.Text>
                                Thickness: {product.thickness}<br />
                            </Card.Text>
                            <Card.Text>
                                Brand: {product.brand}<br />
                            </Card.Text>
                            <Card.Text>
                                Stock: {product.quantityInStock}<br />
                            </Card.Text>
                        </Card>
                    </CardGroup>
                )}
        </Container>
    );
};

export default SingleProduct;
