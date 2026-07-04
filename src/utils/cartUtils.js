export const getCart = (shopId) => {
    let cartJSON = localStorage.getItem(`carts[${shopId}]`) || '[]';
    return JSON.parse(cartJSON);
}

export const storeCart = (shopId, cart) => {
    localStorage.setItem(`carts[${shopId}]`, JSON.stringify(cart));
}

export const addToCart = (shopId, product, selectedOptions) => {
    let cart = getCart(shopId);
    cart.push({product: {...product}, selectedOptions: {...selectedOptions}});
    storeCart(shopId, cart);
}

export const removeFromCart = (shopId, index) => {
    let cart = getCart(shopId);
    cart.splice(index, 1);
    storeCart(shopId, cart);
}

export const getCartItemCount = (shopId) => {
    let cart = getCart(shopId);
    return cart.length;
}