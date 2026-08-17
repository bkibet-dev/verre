import { useMemo } from 'react';
import { useProducts } from '../../context/ProductsContext';
import ProductCard from './ProductCard';

function ProductGrid() {
  const { products, searchTerm } = useProducts();
  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return products;
    return products.filter((product) =>
      [product.name, product.collection, product.frameType, product.shape, product.color]
        .join(' ')
        .toLowerCase()
        .includes(term)
    );
  }, [products, searchTerm]);

  if (products.length === 0) {
    return (
      <div className="empty-state">
        <p>The catalog is empty.</p>
        <a href="/addproduct" className="hero-button">Add your first piece →</a>
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="empty-state">
        <p>No products match "{searchTerm}".</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
