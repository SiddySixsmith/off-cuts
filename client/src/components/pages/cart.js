import { useMutation } from '@apollo/client';
import React from 'react';
import { deleteCartItem, getAllCart } from '../../utils/cart-helper';
import { ADD_ORDER } from '../../utils/mutations';
import { Button, Card } from "react-bootstrap"
import "../../styles/pages.css"

export default function Cart() {

    // ask for the order gql query

    const [addOrder, { loading, error }] = useMutation(ADD_ORDER);


    function deleteItem(product) {
        deleteCartItem(product._id)
    }

    async function checkout(event) {

        // get all the cart items
        const products = getAllCart();

        // map them into an array of product ids
        const productIds = products.map((product) => product._id);

        // pass into addOrder

        addOrder({
            variables: {
                products: productIds
            }
        }).catch(error);


    }

    const cartItems = getAllCart();
    console.log(cartItems)

    return (
        <div>
            <h1 className='cartHeader'>Cart</h1>
            <div className='cartContainer'>
                {cartItems.map((item) => {
                    if (!item.product.length) {
                        return <h1>Nothinng in your cart</h1>
                    }

                    return (


                        <Card key={item.product._id} className='cartCard'>
                            <Card.Header id='cartHeader'>{item.product.colour}</Card.Header>
                            <Card.Body >
                                <img
                                    className="small"
                                    src={item.product.image}
                                    alt={item.product.colour}
                                    height="250"
                                    width="250">
                                </img>
                            </Card.Body>
                            <Card.Text className='cardItems' >
                                Colour: {item.product.brand.name} {item.product.colour}  {item.product.finish}<br />
                            </Card.Text>
                            <Card.Text className='cardItems'>
                                Length: {item.product.length} x {item.product.width} x {item.product.thickness}<br />
                            </Card.Text>
                            <Card.Text className='cardItems'>
                                Price: {item.product.price}<br />
                            </Card.Text>
                        </Card>

                    )
                })}

            </div>
            <div className='checkoutbutton'>
                <Button
                    sm="true"
                    id="addCart"
                    variant="primary"
                    size="lg"
                    className=" searchBtn "
                // onClick={checkout}
                >
                    Checkout
                </Button>
            </div>
        </div>
    );
}
