import { useProducts } from '../context/ProductContext';
import ProductCard from './ProductCard';

export default function ProductList() {
  const { products, searchTerm } = useProducts();

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filtered.length === 0) {
    return <p>No products match your search.</p>;
  }

  return (
    <div className="product-list">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}