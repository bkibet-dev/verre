import { createContext, useContext } from 'react';
import { useProducts as useProductsState } from '../hooks/useProducts';

const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const productsState = useProductsState();

  return (
    <ProductsContext.Provider value={productsState}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
}
