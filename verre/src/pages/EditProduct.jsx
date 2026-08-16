import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductForm from '../components/products/ProductForm';
import { useProductForm } from '../hooks/useProductForm';
import { useProducts } from '../context/ProductsContext';

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProduct, updateProduct } = useProducts();
  const [showToast, setShowToast] = useState(false);
  const product = getProduct(id);

  const { form, errors, update, handleSubmit } = useProductForm(
    product ? { ...product, price: String(product.price) } : null,
    (productData) => {
      updateProduct(product.id, productData);
      setShowToast(true);
      setTimeout(() => navigate(`/products/${product.id}`), 800);
    }
  );

  if (!product) {
    return (
      <div className="add-product-page">
        <Navbar />
        <div className="not-found">
          <h1>Product not found</h1>
          <p>It may have been deleted.</p>
          <Link to="/products" className="hero-button">Back to Collection →</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="add-product-page">
      <Navbar />
      <div className="page-heading">
        <h1>Edit "{product.name}"</h1>
        <p>Update the details below and save your changes.</p>
      </div>
      <ProductForm
        form={form}
        errors={errors}
        update={update}
        onSubmit={handleSubmit}
        onCancel={() => navigate(`/products/${product.id}`)}
        submitLabel="Save Changes"
      />
      {showToast && <div className="success-toast">Product updated successfully!</div>}
    </div>
  );
}
