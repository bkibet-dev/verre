import Navbar from '../components/Navbar';
import SearchBar from '../components/products/SearchBar';
import ProductGrid from '../components/products/ProductGrid';
import { useProducts } from '../context/ProductsContext';

function ProductCatalog() {
  const { products } = useProducts();

  return (
    <div className="product-catalog-page">
      <Navbar />
      <div className="catalog-heading">
        <div>
          <h1>The Collection</h1>
          <p>{products.length} piece{products.length !== 1 ? 's' : ''} in the studio catalog</p>
        </div>
        <SearchBar />
      </div>
      <ProductGrid />
    </div>
  );
}

export default ProductCatalog;
