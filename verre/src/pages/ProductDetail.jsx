import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductSwatch from '../components/products/ProductSwatch';
import { useProducts } from '../context/ProductsContext';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProduct, deleteProduct } = useProducts();
  const product = getProduct(id);

  if (!product) {
    return (
      <div className="product-detail-page">
        <Navbar />
        <div className="not-found">
          <h1>Product not found</h1>
          <p>It may have been deleted.</p>
          <Link to="/products" className="hero-button">Back to Collection →</Link>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    const confirmed = window.confirm(`Delete "${product.name}"? This can't be undone.`);
    if (confirmed) {
      deleteProduct(product.id);
      navigate('/products');
    }
  };

  return (
    <div className="product-detail-page">
      <Navbar />
      <div className="product-detail">
        <div className="product-detail-media">
          {product.image ? (
            <img src={product.image} alt={product.name} className="product-image" />
          ) : (
            <ProductSwatch color={product.color} shape={product.shape} size={220} />
          )}
        </div>
        <div className="product-detail-info">
          <p className="hero-label">{product.collection}</p>
          <h1>{product.name}</h1>
          <p className="product-detail-price">${product.price}</p>

          <dl className="product-attributes product-attributes-large">
            <div><dt>Frame Type</dt><dd>{product.frameType}</dd></div>
            <div><dt>Shape</dt><dd>{product.shape}</dd></div>
            <div><dt>Size</dt><dd>{product.size}</dd></div>
            <div>
              <dt>Color</dt>
              <dd className="product-color">
                <span className="color-dot" style={{ backgroundColor: product.color }} />
                {product.color}
              </dd>
            </div>
          </dl>

          <div className="product-card-actions">
            <Link to={`/products/${product.id}/edit`} className="primary-button">Edit</Link>
            <button type="button" className="danger-button" onClick={handleDelete}>Delete</button>
            <Link to="/products" className="secondary-button">Back to Collection</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
