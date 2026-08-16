import { Routes, Route, Navigate } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import ProductCatalog from './pages/ProductCatalog';

export default function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>
    </ProductProvider>
  );
}

