import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';

export default function ProductCatalog() {
  return (
    <div className="product-catalog-page">
      <SearchBar />
      <ProductList />
    </div>
  );
}