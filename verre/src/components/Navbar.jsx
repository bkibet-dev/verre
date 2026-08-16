import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <NavLink to="/">VERRE</NavLink>
      </div>

      <div className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Collection</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div className="navbar-action">
        <NavLink to="/add-product">
          + Add Piece
        </NavLink>
      </div>

    </nav>
  );
}

export default Navbar;