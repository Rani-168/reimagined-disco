import { Link } from "react-router-dom";

function ProductCard({ item, addToCompare }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-xl hover:scale-105 transition duration-300">
      
      <img
        src={item.image}
        className="h-40 mx-auto object-contain"
      />

      <h2 className="text-lg font-semibold mt-3">
        {item.name}
      </h2>

      <p className="text-gray-500">{item.brand}</p>

      <p className="text-blue-600 font-bold text-xl">
        ₹{item.price}
      </p>

      {/* View Details */}
      <Link to={`/product/${item.id}`}>
        <button className="w-full bg-blue-500 text-white py-2 mt-3 rounded-lg hover:bg-blue-600">
          View Details
        </button>
      </Link>

      {/* ✅ Compare Button */}
      <button
        onClick={() => addToCompare(item)}
        className="w-full bg-yellow-500 text-white py-2 mt-2 rounded-lg hover:bg-yellow-600"
      >
        Compare
      </button>
    </div>
  );
}

export default ProductCard;