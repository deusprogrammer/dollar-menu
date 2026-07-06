import React from 'react';
import { getRangeOfPrices } from '../utils/productUtils';
import { Link } from 'react-router';

const ProductThumbnail = ({product, mode, shopId}) => (
    <div style={{ width: '250px', padding: '10px 0px' }}>
        <Link to={`/shops/${shopId}/products/${product.id}`}>
            <img src={product.thumbnailImageUrl} />
            <div>{product.name}</div>
            <div>{getRangeOfPrices(product)}</div>
        </Link>
        {mode === 'edit' && <Link to={`/shops/${shopId}/products/${product.id}/edit`}>Edit</Link>}
    </div>
)

export default ProductThumbnail;