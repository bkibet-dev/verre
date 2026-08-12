import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <header className="admin-header">
            <div className="logo">
                Verre
            </div>
            <nav className="admin-nav">
                <NavLink
                    to="/products"
                    className="catalog-link"
                >
                    Catalog
                </NavLink>
                <NavLink
                    to="/addproduct"
                    className="header-add-button"
                >
                    Add product
                </NavLink>
            </nav>
        </header>
    );
}