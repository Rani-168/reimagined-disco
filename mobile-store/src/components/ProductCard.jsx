import { Link } from "react-router-dom";

function ProductCard({ item }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 hover:scale-105 transition">
      <img src={item.image} className="h-40 mx-auto" />
      <h2 className="text-lg font-bold mt-2">{item.name}</h2>
      <p className="text-gray-500">₹{item.price}</p>

      <Link to={`/product/${item.id}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">
          View Details
        </button>
      </Link>
    </div>
  );
}

export default ProductCard;