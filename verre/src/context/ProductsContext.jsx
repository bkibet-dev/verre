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
      color: '#242424',
      image: ''
    },
    {
      id: 2,
      name: 'Retro Round',
      collection: 'Retro & Vintage',
      price: 220.00,
      frameType: 'Half-Rim',
      shape: 'Round',
      size: '80x120 cm',
      color: '#b8925a',
      image: ''
    }
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const addProduct = (product) => {
     setProducts((current) => [...current, product]);
  };

  const updateProduct = (id, updates) => {
     setProducts((current) =>
         current.map((product) =>
              product.id === id ? { ...product, ...updates } : product
           )
        );
    };

  const deleteProduct = (id) => {
     setProducts((current) => current.filter((product) => product.id !== id));
  };

  const getProduct = (id) =>
    products.find((product) => String(product.id) === String(id));

  const value = { products, searchTerm, setSearchTerm, addProduct, updateProduct, deleteProduct, getProduct };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}