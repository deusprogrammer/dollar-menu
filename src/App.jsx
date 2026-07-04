import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import ShopTemplate from './routes/ShopTemplate';
import Shop from './routes/Shop';
import Product from './routes/Product';
import Cart from './routes/Cart';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/shops/:shopId" element={<ShopTemplate />}>
                    <Route index element={<Shop />} />
                    <Route path="products/:productId" element={<Product />} />
                    <Route path="cart" element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;