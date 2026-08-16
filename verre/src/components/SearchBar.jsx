import { useProducts } from '../context/ProductContext';
import './SearchBar.css';

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useProducts();

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}