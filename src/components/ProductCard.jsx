import { Link } from "react-router-dom";

function ProductCard({ item, addToCart, addToCompare }) {
  return (
    <div className="bg-white shadow-lg rounded-[32px] p-5 hover:shadow-2xl hover:scale-[1.02] transition duration-300 border border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-slate-500">{item?.brand}</div>
        <div className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 font-semibold">
          {item?.rating || 4.5}★
        </div>
      </div>

      <div className="flex justify-center mb-4 h-44">
        <img
          src={item?.image}
          className="max-h-full object-contain"
          alt={item?.name}
        />
      </div>

      <h2 className="text-xl font-semibold text-slate-900 mb-2">{item?.name}</h2>

      <div className="flex items-center gap-3 mb-3">
        <p className="text-2xl font-bold text-slate-900">₹{item?.price}</p>
        {item?.oldPrice && (
          <p className="text-sm line-through text-slate-400">₹{item?.oldPrice}</p>
        )}
      </div>

      {item?.discount && (
        <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700 mb-4">
          <span>🔥</span>
          <span>{item.discount}</span>
        </div>
      )}

      <p className={`text-sm mb-4 ${item?.stock > 0 ? "text-green-600" : "text-red-500"}`}>
        {item?.stock > 0 ? "In Stock" : "Out of Stock"}
      </p>

      <div className="grid gap-3">
        <Link to={`/product/${item?.id}`} className="w-full">
          <button className="w-full bg-slate-900 text-white py-3 rounded-2xl font-semibold hover:bg-slate-800 transition">
            View
          </button>
        </Link>

        <button
          onClick={() => addToCart(item)}
          disabled={item?.stock === 0}
          className={`w-full py-3 rounded-2xl font-semibold transition ${
            item?.stock > 0
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-slate-200 text-slate-500 cursor-not-allowed"
          }`}
        >
          Add to Cart
        </button>

        <button
          onClick={() => addToCompare(item)}
          className="w-full bg-amber-500 text-white py-3 rounded-2xl font-semibold hover:bg-amber-600 transition"
        >
          Compare
        </button>
      </div>
    </div>
  );
}

export default ProductCard;