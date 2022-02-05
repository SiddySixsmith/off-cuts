import React from "react";
import "../../styles/pages.css";
import { useCart } from "react-use-cart";

function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        products,
        updateItemQuantity,
        removeItem,
    } = useCart();

    if (isEmpty) return <h4>Your cart is empty</h4>;

    return (
        <>
            <h1>Cart ({totalUniqueItems})</h1>

            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <div>{product.color}</div>
                        <button onClick={() => removeItem(product._id)}>&times;</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Cart;