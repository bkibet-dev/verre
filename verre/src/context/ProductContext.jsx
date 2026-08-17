import { createContext, useContext, useState } from 'react';

const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Aviator Frame',
      collection: 'Classic',
      price: 145.00,
      frameType: 'Full-Rim',
      shape: 'Round',
      size: '60x90 cm',
      color: 'Matte Black',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Retro Round',
      collection: 'Retro & Vintage',
      price: 220.00,
      frameType: 'Half-Rim',
      shape: 'Round',
      size: '80x120 cm',
      color: 'Antique Gold',
      imageUrl: 'https://via.placeholder.com/150'
    }
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const addProduct = (product) => {
     setProducts((current) => [...current, product]);
  };

  const updateProduct = (updatedProduct) => {
     setProducts((current) =>
         current.map((product) =>
              product.id === updatedProduct.id ? updatedProduct : product
           )
        );
    };

  const deleteProduct = (id) => {
     setProducts((current) => current.filter((product) => product.id !== id));
  };

  const value = { products, searchTerm, setSearchTerm, addProduct, updateProduct, deleteProduct };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

export function useProducts() {
  return useContext(ProductContext);
}
