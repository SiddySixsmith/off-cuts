import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Card, Container, CardGroup, Nav } from "react-bootstrap";
import { useCart } from "react-use-cart";
import "../../styles/pages.css";


const SingleProduct = ({ product }) => {
    const { addItem } = useCart();

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
                <Card key={product._id} className="singleProductCard">
                    <Card.Body> 
                        <img 
                            className="small" 
                            src={product.image} 
                            alt={product.colour}
                            height= "250"
                            width="250">
                        </img> 
                    </Card.Body>
                    <Card.Text >
                        Colour: {product.brand.name} {product.colour} {product.finish}<br />
                    </Card.Text>
                    <Card.Text>
                        Length: {product.quantityInStock > 0 ? product.quantityInStock : product.length} x {product.width} x {product.thickness}<br />
                    </Card.Text>
                    <Card.Text>
                        Price: {product.price}<br />
                    </Card.Text>
                    {/* <Card.Text >
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
                        Brand: {product.brand.name}<br />
                    </Card.Text>
                    <Card.Text>
                        Category: {product.stockType.name}<br />
                    </Card.Text> */}
                    <LinkContainer to="/cart">
                        <Nav.Link
                            sm="true"
                            id="addCart"
                            variant="primary"
                            size="lg"
                            className=" searchBtn "
                            onClick={() => addItem(product, 1)}
                        >
                            Add To Cart
                        </Nav.Link>
                    </LinkContainer>

                </Card>
            </CardGroup>
            <br></br>
        </Container>
    );
};


export default SingleProduct;