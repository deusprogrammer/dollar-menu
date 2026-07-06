import { useParams } from "react-router";
import { useEffect, useState } from "react";
import testData from "../test/testData";
import { capitalize } from "../utils/stringUtils";
import { getCurrentPrice, getDefaultOptions } from "../utils/productUtils";
import { addToCart } from "../utils/cartUtils";

const Product = () => {
    const [product, setProduct] = useState();
    const [selectedOptions, setSelectedOptions] = useState();
    const { shopId, productId } = useParams();

    const updateOption = (key, value) => {
        setSelectedOptions({
            ...selectedOptions,
            [key]: value,
        });
    };

    useEffect(() => {
        (async () => {
        const found = testData[shopId]?.products?.find(
            ({ id }) => id === parseInt(productId),
        );
        setProduct(found);
        if (found.variations) {
            setSelectedOptions(getDefaultOptions(product));
        }
        })();
    }, []);

    return (
        <>
        <div
            style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            }}
        >
            <img style={{ width: "500px" }} src={product?.imageUrl} />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "500px",
                    justifyContent: "center",
                    alignItems: "center",
            }}
            >
            <h2>{product?.name}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
                <div>Price:</div>
                <div>${getCurrentPrice(product, selectedOptions)}</div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    width: "200px",
                }}
            >
                {product?.variations &&
                product?.variations.map((variant) => (
                    <div
                        style={{ display: "grid", gridTemplateColumns: "auto auto" }}
                    >
                    <label>{capitalize(variant.name)}</label>
                    <select
                        onChange={({ target: { value } }) =>
                        updateOption(variant.name, value)
                        }
                    >
                        {variant.options.map((variantOption) => (
                        <option value={variantOption.price}>
                            {variantOption.name} =&gt; ${variantOption.price}
                        </option>
                        ))}
                    </select>
                    </div>
                ))}
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    width: "200px",
                }}
            >
                {product?.isCustomizable && <button>Customize</button>}
                <button onClick={() => addToCart(shopId, product, selectedOptions)}>
                    Add to Cart
                </button>
            </div>
            </div>
        </div>
        <div>
            <p>{product?.description}</p>
        </div>
        </>
    );
};

export default Product;
