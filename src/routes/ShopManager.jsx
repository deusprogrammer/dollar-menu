import React from "react";
import Shop from "./Shop";

const ShopManager = () => {
    return (<>
        <h2>Manage Shop</h2>
        <hr/>
        <h3>Metadata</h3>
        <label>Display Name</label>
        <input type='text' />
        <label>Description</label>
        <input type='text' />
        <hr/>
        <h3>Listings</h3>
        <Shop mode='edit' />
    </>);
};

export default ShopManager;
