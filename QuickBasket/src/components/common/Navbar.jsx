import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-brand">
          QuickBasket
        </Link>

        <div className="navbar-links">
          <Link to="/">Home</Link>

          <Link to="/categories">
            Categories
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/cart">
            Cart
          </Link>

          <Link to="/wishlist">
            Wishlist
          </Link>

          <Link to="/profile">
            Profile
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
