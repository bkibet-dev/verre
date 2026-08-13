import { createContext, useContext } from 'react';
import { useProducts as useProductsState } from '../components/useProduct';

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
  return useContext(ProductsContext);
}