import { useState, useEffect } from 'react';

const STORAGE_KEY = 'verre-products';
const seedProducts = [
  { id: 1, name: 'Aria', collection: 'Modern Minimalist', price: 189, frameType: 'Full-Rim', shape: 'Round', size: 'M', color: '#8a7f6b' },
  { id: 2, name: 'Solstice', collection: 'Classic', price: 149, frameType: 'Half-Rim', shape: 'Rectangle', size: 'L', color: '#3d3a36' },
  { id: 3, name: 'Nomad', collection: 'Sports Active', price: 165, frameType: 'Rimless', shape: 'Square', size: 'M', color: '#5c6b57' },
  { id: 4, name: 'Vesper', collection: 'Retro & Vintage', price: 210, frameType: 'Full-Rim', shape: 'Round', size: 'S', color: '#7a4b3a' },
];

function loadInitialProducts() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : seedProducts;
  } catch {
  
    return seedProducts;
  }
}

export function useProducts() {
  const [products, setProducts] = useState(loadInitialProducts);
  const [searchTerm, setSearchTerm] = useState('');

  
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch {
      
    }
  }, [products]);

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

  return {
    products,
    searchTerm,
    setSearchTerm,
    addProduct,
    updateProduct,
    deleteProduct,
    getProduct,
  };
}
