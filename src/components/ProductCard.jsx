import { Link } from "react-router-dom";

function ProductCard({ item, addToCompare }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-2xl hover:scale-105 transition duration-300 border">

  <img
    src={item.image}
    className="h-40 mx-auto object-contain"
    alt={item.name}
  />

  <h2 className="text-lg font-semibold mt-3">{item.name}</h2>

  <p className="text-gray-500">{item.brand}</p>

  <p className="text-green-600 font-bold text-xl">₹{item.price}</p>

  <div className="flex gap-2 mt-3">
    <Link to={`/product/${item.id}`} className="w-full">
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
        View
      </button>
    </Link>

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