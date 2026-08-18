import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import Navbar from '../components/Navbar';

export default function ProductCatalog() {
  return (
    <> 
    <div className="product-catalog-page">
      <SearchBar />
      <ProductList />
    </div>
    </>
  );
}
