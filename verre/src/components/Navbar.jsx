import { NavLink } from 'react-router-dom';

function Navbar() {
  const linkClass = ({ isActive }) => (isActive ? 'active' : undefined);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">VERRE</NavLink>
      </div>

      <div className="navbar-links">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/products" className={linkClass}>Collection</NavLink>
        <NavLink to="/addproduct" className={linkClass}>Add Piece</NavLink>
      </div>

      <div className="navbar-action">
        <NavLink to="/addproduct">+ Add Piece</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
