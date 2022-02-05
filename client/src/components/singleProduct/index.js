import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Card, Container, CardGroup, Nav } from "react-bootstrap";
import "../../styles/pages.css";


const SingleProduct = ({ product }) => {
    if (!product) {
        return (
            <div className="noProducts">
                <h3>No products at the moment</h3>
            </div>
        );
    }

    return (

        <Container className="productListContainer">
            <CardGroup className="cardGroup" >
                <Card key={product._id} className="productCard">
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
                    <LinkContainer to="/Cart">
                        <Nav.Link
                            sm="true"
                            id="addCart"
                            variant="primary"
                            size="lg"
                            className=" searchBtn "
                        >
                            Add To Cart
                        </Nav.Link>
                    </LinkContainer>
                </Card>
            </CardGroup>
        </Container>
    );
};


export default SingleProduct;