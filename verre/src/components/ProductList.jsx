import { useProducts } from '../context/ProductsContext';
import ProductCard from './ProductCard';

export default function ProductList() {
  const { products, searchTerm } = useProducts();

  const filteredProducts = products.filter((product) =>
     product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (filteredProducts.length === 0) {
     return <p>No products match your search.</p>;
    }

  return (
        <div className="product-list">
         {filteredProducts.map((product) => (
             <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}