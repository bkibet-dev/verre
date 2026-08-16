import { useProducts } from '../../context/ProductsContext';

function SearchBar() {
  const { searchTerm, setSearchTerm } = useProducts();

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name, collection, frame, shape, or color..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search products"
      />
      {searchTerm && (
        <button
          type="button"
          className="clear-search"
          onClick={() => setSearchTerm('')}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default SearchBar;
