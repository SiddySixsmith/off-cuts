
function getAllCart() {


    return JSON.parse(localStorage.getItem('cart')) || [];
}

function addToCart(item) {

    const existing = getAllCart();

    // TODO: make sure item is not duplicating

    // const foundIndex = existing.findIndex((exist) => item._id === exist._id);

    // if (foundIndex !== -1) {
    //     console.log('item already added');
    //     return;
    // }

    const newCart = [
        ...existing,
        item
    ]

    localStorage.setItem('cart', JSON.stringify(newCart));


}

function deleteCartItem(productId) {

    const existing = getAllCart();

    const foundIndex = existing.findIndex((item) => item._id === productId);

    if (foundIndex === -1) {
        console.log('product not found incart!!');
        return;
    }

    const newCart = [
        ...existing.slice(0, foundIndex),
        ...existing.slice(foundIndex + 1)
    ]

    localStorage.setItem('cart', JSON.stringify(newCart));


}

export {
    getAllCart,
    addToCart,
    deleteCartItem,
}