import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import ShopTemplate from "./routes/ShopTemplate";
import Shop from "./routes/Shop";
import Product from "./routes/Product";
import Cart from "./routes/Cart";
import ShopManager from "./routes/ShopManager";
import ProductEdit from "./routes/ProductEdit";

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/shops/:shopId" element={<ShopTemplate />}>
                <Route index element={<Shop />} />
                <Route path="products/new" element={<ProductEdit newProduct={true} />} />
                <Route path="products/:productId" element={<Product />} />
                <Route path="products/:productId/edit" element={<ProductEdit />} />
                <Route path="cart" element={<Cart />} />
                <Route path="manage" element={<ShopManager />} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
};

export default App;
