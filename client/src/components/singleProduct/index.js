import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useMutation } from "@apollo/client";
import { Card, Container, CardGroup, Nav } from "react-bootstrap";
import { ADD_ORDER } from "../../utils/mutations"
import { useStoreContext } from "../../utils/GlobalSate"
import { idbPromise } from "../../utils/helper";
import { ADD_TO_CART } from "../../utils/actions"
import "../../styles/pages.css";


const SingleProduct = (item, { product }) => {
    const [state, dispatch] = useStoreContext();

    const {
        _id,
        name
    } = item;

    const { cart } = state;

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id)
        if (itemInCart) {
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...item, purchaseQuantity: 1 }
            });
            idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
        }
    }

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
                        <LinkContainer to="/cart">
                            <Nav.Link
                                sm="true"
                                id="addCart"
                                variant="primary"
                                size="lg"
                                className=" searchBtn "
                                onClick={addToCart}
                            >
                                Add To Order
                            </Nav.Link>
                        </LinkContainer>


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