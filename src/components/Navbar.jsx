import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuth, logout, user } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
      <Link to="/products" className="text-xl font-bold text-indigo-600 tracking-tight">
        ShopEase
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/products" className="text-sm text-gray-600 hover:text-indigo-600 transition">
          Products
        </Link>

        {!isAuth ? (
          <>
            <Link to="/login" className="text-sm text-gray-600 hover:text-indigo-600 transition">
              Login
            </Link>
            <Link
              to="/signup"
              className="text-sm bg-indigo-600 text-white px-4 py-1.5 rounded-lg hover:bg-indigo-700 transition"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link to="/cart" className="text-sm text-gray-600 hover:text-indigo-600 transition">
              Cart
            </Link>
            <Link to="/orders" className="text-sm text-gray-600 hover:text-indigo-600 transition">
              Orders
            </Link>
            <Link to="/addresses" className="text-sm text-gray-600 hover:text-indigo-600 transition">
              Addresses
            </Link>
            <Link to="/account" className="text-sm text-gray-600 hover:text-indigo-600 transition">
              {user?.firstName ?? "Account"}
            </Link>
            <button
              onClick={logout}
              className="text-sm bg-red-500 text-white px-4 py-1.5 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}