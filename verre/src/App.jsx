import { Routes, Route, Navigate } from 'react-router-dom';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetail from './pages/ProductDetail';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" replace />} />
      <Route path="/products" element={<ProductCatalog />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/products/:id/edit" element={<EditProduct />} />
    </Routes>
  );
}

export default App;
