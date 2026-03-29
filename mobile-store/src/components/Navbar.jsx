import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Mobile Store</h1>

      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </div>
  );
}

export default Navbar;