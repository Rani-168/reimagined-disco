import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold">MobileStore</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for mobiles..."
        className="w-1/3 p-2 rounded text-black"
      />

      {/* Links */}
      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </div>
  );
}

export default Navbar;