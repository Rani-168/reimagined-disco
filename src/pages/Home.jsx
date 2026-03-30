import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

function Home() {
  const { products, cart, setCart, reduceStock } =
    useContext(StoreContext);

  const addToCart = (p) => {
    if (p.stock <= 0) return alert("Out of stock");

    setCart([...cart, p]);
    reduceStock(p.id);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Store</h1>

        <div className="flex gap-3">
          <Link to="/cart">🛒 Cart</Link>
          <Link to="/admin">⚙️ Admin</Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded shadow">
            <h2 className="font-bold">{p.name}</h2>
            <p>₹{p.price}</p>
            <p>{p.category}</p>

            <p className="text-green-600">
              Stock: {p.stock}
            </p>

            <button
              onClick={() => addToCart(p)}
              className="bg-blue-500 text-white px-3 py-1 mt-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;