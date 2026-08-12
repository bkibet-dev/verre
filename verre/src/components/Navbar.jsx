function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <a href="/">VERRE</a>
      </div>

      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/products">Collection</a>
        <a href="/add-product">Add Piece</a>
      </div>

      <div className="navbar-action">
        <a href="/add-product">
          + Add Piece
        </a>
      </div>

    </nav>
  );
}

export default Navbar;