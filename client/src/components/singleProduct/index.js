import React from "react";
import { LinkContainer } from "react-router-bootstrap"
import { Card, Container, CardGroup, Nav, Button } from "react-bootstrap";
import { addToCart } from "../../utils/cart-helper";
import Auth from "../../utils/auth"
import "../../styles/pages.css";

const CheckAuth = (product) => {
    if (Auth.loggedIn) {
        return (
            <Button
                sm="true"
                id="addCart"
                variant="primary"
                size="lg"
                className=" searchBtn "
                onClick={() => addToCart(product)}
            >
                Add To Order
            </Button>
        )
    }
    return (
        <>
            <LinkContainer to={"/login"}>
                <Button
                    sm="true"
                    id="addCart"
                    variant="primary"
                    size="lg"
                    className=" searchBtn "
                    onClick={() => addToCart(product)}
                >
                    Add To Order
                </Button>
            </LinkContainer>
            <LinkContainer to={"/singup"}>
                <Button
                    sm="true"
                    id="addCart"
                    variant="primary"
                    size="lg"
                    className=" searchBtn "
                    onClick={() => addToCart(product)}
                >
                    Add To Order
                </Button>
            </LinkContainer>
        </>
    )
}



const SingleProduct = ({ product }) => {

    try {

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
                                height="250"
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
                        < CheckAuth product={product} />
                    </Card>
                </CardGroup>
                <br></br>
            </Container>
        );
    } catch (err) {
        console.log(err)
    }
};


export default SingleProduct;