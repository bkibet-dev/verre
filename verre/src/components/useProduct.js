import { useState } from 'react';

export function useProducts() {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        setProducts((currentProducts) => [
            ...currentProducts,
            product
        ]);
    };

    const updateProduct = (id, updateProduct) => {
        setProducts((currentProducts) => 
            currentProducts.map((product) =>
                product.id === id
                    ? {...product, ...updateProduct }
                    : product
                )
            );
    };

    const deleteProduct = (id) => {
        setProducts((currentProducts) =>
            currentProducts.filter((product) => product.id !== id)
        );
    };

    return {
        products,
        addProduct,
        updateProduct,
        deleteProduct
    };
}