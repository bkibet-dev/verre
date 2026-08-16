import { Link } from 'react-router-dom';
import { useProducts } from '../../context/ProductsContext';
import ProductSwatch from './ProductSwatch';

function ProductCard({ product }) {
  const { deleteProduct } = useProducts();

  const handleDelete = () => {
    const confirmed = window.confirm(`Delete "${product.name}"? This can't be undone.`);
    if (confirmed) {
      deleteProduct(product.id);
    }
  };

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-card-media">
        <ProductSwatch color={product.color} shape={product.shape} />
      </Link>

      <div className="product-card-body">
        <div className="product-card-heading">
          <h3>{product.name}</h3>
          <span className="product-price">${product.price}</span>
        </div>

        <p className="product-collection">{product.collection}</p>

        <dl className="product-attributes">
          <div>
            <dt>Frame</dt>
            <dd>{product.frameType}</dd>
          </div>
          <div>
            <dt>Shape</dt>
            <dd>{product.shape}</dd>
          </div>
          <div>
            <dt>Size</dt>
            <dd>{product.size}</dd>
          </div>
          <div>
            <dt>Color</dt>
            <dd className="product-color">
              <span className="color-dot" style={{ backgroundColor: product.color }} />
              {product.color}
            </dd>
          </div>
        </dl>

        <div className="product-card-actions">
          <Link to={`/products/${product.id}/edit`} className="secondary-button">
            Edit
          </Link>
          <button type="button" className="danger-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
