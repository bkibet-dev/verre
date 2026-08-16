import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <Link to="/">VERRE</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Collection</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="navbar-action">
        <Link to="/add-product">
          + Add Piece
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;