import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Home() {
  const { products, reduceStock } = useContext(StoreContext);
  const { cart, addToCart } = useContext(CartContext);

  // ✅ Add to Cart
  const handleAddToCart = (p) => {
    if (p.stock <= 0) return alert("Out of stock");

    addToCart(p);
    reduceStock(p.id);
  };

  // ✅ Compare Function
  const addToCompare = (p) => {
    alert(`${p.name} added to compare`);
    console.log("Compare:", p);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* 🔷 Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Store</h1>

        <div className="flex gap-4">
          <Link 
            to="/cart" 
            className="bg-yellow-400 px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition"
          >
            🛒 Cart ({cart.length})
          </Link>

          <Link 
            to="/admin" 
            className="bg-gray-800 text-white px-4 py-2 rounded-full shadow hover:bg-gray-700 transition"
          >
            ⚙️ Admin
          </Link>
        </div>
      </div>

      {/* 🔥 Products Grid */}
      {products?.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard 
              key={p.id} 
              item={p} 
              addToCart={handleAddToCart}
              addToCompare={addToCompare}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          No products found. Please refresh the page or reset the store.
        </div>
      )}

    </div>
  );
}

export default Home;