import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';

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