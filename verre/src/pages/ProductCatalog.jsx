import Navbar from '../components/Navbar';
import SearchBar from '../components/products/SearchBar';
import ProductList from '../components/products/ProductList';

function ProductCatalog() {
  return (
    <div className="product-catalog-page">
      <Navbar />
      <SearchBar />
      <ProductList />
    </div>
  );
}

export default ProductCatalog;