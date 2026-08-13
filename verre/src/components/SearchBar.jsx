import { useProducts } from '../context/ProductsContext';

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useProducts();

  return (
      <input
         type="text"
         placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
}
