import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function Navbar() {
  const { cart } = useContext(StoreContext);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 flex justify-between items-center shadow-lg">

      <h1 className="text-2xl font-bold tracking-wide">
        <img src="public/imglogo.png" alt="" /> MobileStore
      </h1>

      <input
        type="text"
        placeholder="Search mobiles..."
        className="w-1/3 p-2 rounded-lg text-black outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <div className="space-x-6 font-medium">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/shop" className="hover:text-yellow-300">Shop</Link>
        <Link to="/walkin" className="hover:text-yellow-300">Walk-in</Link>

        <Link to="/cart" className="hover:text-yellow-300">
          🛒 Cart ({cart.length})
        </Link>
      </div>

      <button
        className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;