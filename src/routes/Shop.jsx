import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import testData from '../test/testData';
import ProductThumbnail from '../components/ProductThumbnail';
import { capitalize } from '../utils/stringUtils';

const Shop = ({ mode = 'view' }) => {
    const [shop, setShop] = useState();
    const {shopId: id} = useParams();

    useEffect(() => {
        (async () => {
            testData[id] && setShop(testData[id]);
        })()
    }, []);

    return (
        <div>
            {shop?.categories.map((category) => {
                return (
                    <>
                        <h2>{capitalize(category)}</h2>
                        <div style={{display: 'flex', gap: '5px', flexWrap: 'wrap', marginLeft: 'auto', width: '90%'}}>
                            {shop.products.filter((product) => product.category === category).map((product) => 
                                <>
                                    <ProductThumbnail shopId={id} product={product} mode={mode} />
                                </>
                            )}
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Shop;