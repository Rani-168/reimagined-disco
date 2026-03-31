import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function Navbar() {
  const { cart } = useContext(StoreContext);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 flex justify-between items-center shadow-lg">

      <h1 className="flex items-center gap-3 text-2xl font-extrabold tracking-wide">
  <img 
    src="/imglogo.png" 
    alt="logo" 
    className="w-10 h-10 object-cover rounded-full border-2 border-white shadow-lg"
  />
  <span className="bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
    MobileStore
  </span>
</h1>

      <div className="w-full md:w-1/3 relative">
  <input
    type="text"
    placeholder="Search mobiles..."
    className="w-full pl-10 pr-4 py-2 rounded-full text-black bg-white shadow-md outline-none 
               focus:ring-2 focus:ring-yellow-400 focus:shadow-lg transition duration-300"
  />

  {/* Search Icon */}
  <span className="absolute left-3 top-2.5 text-gray-500">
    🔍
  </span>
</div>

      <div className="flex items-center space-x-6 font-medium text-white">
  <Link 
    to="/" 
    className="hover:text-yellow-300 transition duration-300 hover:scale-105"
  >
    Home
  </Link>

  <Link 
    to="/shop" 
    className="hover:text-yellow-300 transition duration-300 hover:scale-105"
  >
    Shop
  </Link>

  <Link 
    to="/walkin" 
    className="hover:text-yellow-300 transition duration-300 hover:scale-105"
  >
    Walk-in
  </Link>

  <Link 
    to="/cart" 
    className="flex items-center gap-1 bg-yellow-400 text-black px-3 py-1 rounded-full shadow-md hover:bg-yellow-300 transition duration-300"
  >
    🛒 <span>Cart ({cart.length})</span>
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