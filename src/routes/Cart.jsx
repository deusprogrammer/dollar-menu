import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { getCurrentPrice } from '../utils/productUtils';
import { getCart, removeFromCart } from '../utils/cartUtils';

const Cart = () => {
    const [cart, setCart] = useState();
    const {shopId} = useParams();

    useEffect(() => {
        (async () => {
            if (shopId) {
                setCart(getCart(shopId));
            }
        })();
    }, []);

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
            <h2>Cart</h2>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                {cart?.length === 0 && (
                    <div>
                        <p>Your Cart is Empty</p>
                    </div>
                )}
                <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto', width: '100%'}}>
                {cart && cart?.map((cartItem, index) => {
                    return (
                        <>
                            <div>{cartItem.product.name}</div>
                            <div>${getCurrentPrice(cartItem.product, cartItem.selectedOptions)}</div>
                            <div><button onClick={() => removeFromCart(shopId, index)}>Delete</button></div>
                        </>
                    )
                })}
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '5px', width: '200px', justifyContent: 'center', alignItems: 'center'}}>
                <Link to={`/shops/${shopId}/checkout`}>
                    <button>Checkout</button>
                </Link>
                <Link to={`/shops/${shopId}`}>
                    <button>Continue Shopping</button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;