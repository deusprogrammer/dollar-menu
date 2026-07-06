import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router';
import testData from '../test/testData';
import ProductThumbnail from '../components/ProductThumbnail';
import { capitalize } from '../utils/stringUtils';

const Shop = () => {
    const [shop, setShop] = useState();
    const {shopId: id} = useParams();

    useEffect(() => {
        (async () => {
            testData[id] && setShop(testData[id]);
        })()
    }, []);

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                <nav>
                    <ul className="navbar-list">
                        <li><Link to={`/shops/${id}`}>Home</Link></li>
                        <li>|</li>
                        <li><Link to={`/shops/${id}/cart`}>Cart</Link></li>
                        <li>|</li>
                        <li><Link to={`/shops/${id}/manage`}>Manage</Link></li>
                    </ul>
                </nav>
            </div>
            <Link to={`/shops/${id}`}>
                <img src={shop?.bannerImageUrl} />
            </Link>
            <h1>{shop?.name || "Unknown Shop"}</h1>
            <Outlet />
        </>
    )
}

export default Shop;