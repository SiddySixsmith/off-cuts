import React from "react";
import "../../styles/pages.css";
import { useCart } from "react-use-cart";
import ProductsList from "../allProductList";

function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();
    try {


        if (isEmpty) return <h4>Your cart is empty</h4>;

        return (
            <>
                <h1>Cart ({totalUniqueItems})</h1>

                <ProductsList items={items} />
            </>
        );
    } catch (err) {
        console.log(err)
    }
}

export default Cart;