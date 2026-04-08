import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "15px", background: "#222", color: "#fff" }}>
      <h2>MyStore</h2>
      <div>
        <Link to="/" style={{ marginRight: "10px", color: "#fff" }}>Home</Link>
        <Link to="/products" style={{ marginRight: "10px", color: "#fff" }}>Products</Link>
        <Link to="/cart" style={{ marginRight: "10px", color: "#fff" }}>Cart</Link>
        <Link to="/login" style={{ color: "#fff" }}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;