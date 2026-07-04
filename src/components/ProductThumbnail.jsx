import React from 'react';
import { getRangeOfPrices } from '../utils/productUtils';

const ProductThumbnail = ({product}) => (
    <div style={{width: '250px', padding: '10px 0px'}}>
        <img src={product.thumbnailImageUrl} />
        <div>{product.name}</div>
        <div>{getRangeOfPrices(product)}</div>
    </div>
)

export default ProductThumbnail;