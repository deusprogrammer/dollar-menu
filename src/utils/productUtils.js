export const getLowestPrice = (product) => {
    product = product || {price: 0, variations: []}
    let totalLowest = product.price;

    if (!product.variations) {
        return product.price;
    }

    product.variations.forEach(({options}) => {
        let lowest = Infinity;
        options.forEach(option => {
            lowest = Math.min(lowest, option.price);
        });
        totalLowest += lowest;
    });

    return totalLowest;
}

export const getHighestPrice = (product) => {
    product = product || {price: 0, variations: []}
    let totalHighest = product.price;

    if (!product.variations) {
        return product.price;
    }

    product.variations.forEach(({options}) => {
        let highest = -Infinity;
        options.forEach(option => {
            highest = Math.max(highest, option.price);
        });
        totalHighest += highest;
    });

    return totalHighest;
}

export const getRangeOfPrices = (product) => {
    if (!product.variations) {
        return `$${product.price}`;
    }

    return `$${getLowestPrice(product)} -> $${getHighestPrice(product)}`;
}

export const getDefaultOptions = (product) => {
    const defaultOptions = {};

    product?.variations.forEach((variation) => 
        defaultOptions[variation.name] = variation.options[0].price
    )

    return defaultOptions;
}

export const getCurrentPrice = (product, selectedOptions) => {
    return Object.values(selectedOptions || {}).reduce((total, optionPrice) => {
        return total + parseFloat(optionPrice);
    }, product?.price || 0);
}