import { useEffect, useState } from "react";
import { useParams } from "react-router";
import testData from "../test/testData";

const ProductEdit = ({newProduct}) => {
    const {shopId, productId} = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        if (!newProduct) {
            const found = testData[shopId]?.products?.find(
                ({ id }) => id === parseInt(productId),
            );
            setProduct(found);
        }
    }, []);

    return (<>
        <h2>Editting {product?.name}</h2>
    </>);
};

export default ProductEdit;
