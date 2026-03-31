import { Link } from "react-router-dom";

function ProductCard({ item, addToCart, addToCompare }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-2xl hover:scale-105 transition duration-300 border">

      {/* 🖼 Image */}
      <img
        src={item?.image}
        className="h-40 mx-auto object-contain"
        alt={item?.image}
      />

      {/* 📱 Name */}
      <h2 className="text-lg font-semibold mt-3">{item?.name}</h2>

      {/* 🏷 Brand */}
      <p className="text-gray-500">{item?.brand}</p>

      {/* 💰 Price */}
      <p className="text-green-600 font-bold text-xl">₹{item?.price}</p>

      {/* 📦 Stock */}
      <p className={`text-sm mt-1 ${
        item?.stock > 0 ? "text-green-600" : "text-red-500"
      }`}>
        {item?.stock > 0 ? "In Stock" : "Out of Stock"}
      </p>

      {/* 🔘 Buttons */}
      <div className="flex gap-2 mt-3">
        
        {/* View */}
        <Link to={`/product/${item?.id}`} className="w-full">
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            View
          </button>
        </Link>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(item)}
          disabled={item?.stock === 0}
          className={`w-full py-2 rounded-lg ${
            item?.stock > 0
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Cart
        </button>

        {/* Compare */}
        <button
          onClick={() => addToCompare(item)}
          className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
        >
          Compare
        </button>

      </div>
    </div>
  );
}

export default ProductCard;