import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const categories = [
  { icon: "🛍️", label: "For You" },
  { icon: "👕", label: "Fashion" },
  { icon: "📱", label: "Mobiles" },
  { icon: "💄", label: "Beauty" },
  { icon: "💻", label: "Electronics" },
  { icon: "🏠", label: "Home" },
  { icon: "🧺", label: "Appliances" },
  { icon: "🧸", label: "Toys" },
  { icon: "🍔", label: "Food" },
  { icon: "🏎️", label: "Auto" },
  { icon: "🛴", label: "2 Wheeler" },
  { icon: "⚽", label: "Sports" },
  { icon: "📚", label: "Books" },
  { icon: "🛋️", label: "Furniture" },
];

function Home() {
  const { products, reduceStock } = useContext(StoreContext);
  const { cart, addToCart } = useContext(CartContext);

  const handleAddToCart = (p) => {
    if (p.stock <= 0) return alert("Out of stock");

    addToCart(p);
    reduceStock(p.id);
  };

  const addToCompare = (p) => {
    alert(`${p.name} added to compare`);
    console.log("Compare:", p);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 py-8 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white/95 backdrop-blur-lg rounded-[36px] shadow-2xl border border-slate-200 p-8 mb-10">
          <div className="flex flex-col lg:flex-row justify-between gap-6 items-start lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-sky-500 font-semibold mb-3">Featured picks</p>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Shop mobile phones with premium offers
              </h1>
              <p className="text-gray-600 mt-4 max-w-2xl">
                Explore top-rated devices, latest launches, and trending deals all in one place.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/cart"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 text-white px-6 py-3 font-semibold shadow-xl shadow-cyan-200/40 hover:from-cyan-600 hover:to-sky-700 transition-all duration-300"
              >
                <span className="text-lg">🛒</span>
                <span>Cart</span>
                <span className="inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-full bg-white/15 px-2 text-sm font-semibold">
                  {cart.length}
                </span>
              </Link>
              <Link
                to="/admin"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-300 bg-white text-slate-900 px-6 py-3 font-semibold shadow-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-300"
              >
                <span className="text-lg">⚙️</span>
                <span>Admin</span>
              </Link>
            </div>
          </div>

          <div className="mt-10 overflow-x-auto pb-2">
            <div className="flex min-w-[900px] gap-4">
              {categories.map((category) => (
                <button
                  key={category.label}
                  className={`flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-medium transition duration-300 ${category.label === "For You"
                    ? "border-sky-500 bg-sky-500/10 text-sky-700"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {products?.length > 0 ? (
            products.map((p) => (
              <div key={p.id} className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <ProductCard
                  item={p}
                  addToCart={handleAddToCart}
                  addToCompare={addToCompare}
                />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-500">
              <div className="text-6xl mb-4">📱</div>
              <p className="text-xl">No products found</p>
              <p className="text-sm mt-2">Please refresh the page or reset the store</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;