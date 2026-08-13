import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      collection: 'Minimalist Mirrors',
      price: 145.00,
      frameType: 'Aluminium',
      shape: 'Arched',
      size: '60x90 cm',
      color: 'Matte Black'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      collection: 'Classic Heritage',
      price: 220.00,
      frameType: 'Carved Wood',
      shape: 'Rectangle',
      size: '80x120 cm',
      color: 'Antique Gold'
    }
  ]);

  const deleteProduct = (id) => {
    console.log("Deleting product with id:", id);
    setProducts(products.filter((product) => product.id !== id));
  };

  const updateProduct = (updatedProduct) => {
    console.log("Updating product:", updatedProduct);
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  return (
    <ProductContext.Provider value={{ products, deleteProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};