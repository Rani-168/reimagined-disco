import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";

function Billing() {
  const { id } = useParams();
  const navigate = useNavigate();

  const customers = JSON.parse(localStorage.getItem("walkins")) || [];
  const customer = customers.find((c) => c.id == id);

  const [cart, setCart] = useState([]);

  // Add product
  const addToCart = (p) => {
    const exist = cart.find((item) => item.id === p.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === p.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...p, qty: 1 }]);
    }
  };

  // Total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-4">
        Billing - {customer?.name}
      </h1>

      {/* Products */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-3 rounded shadow">
            <h2>{p.name}</h2>
            <p>₹{p.price}</p>
            <button
              onClick={() => addToCart(p)}
              className="bg-blue-500 text-white px-2 py-1 mt-2 rounded"
            >
              Add
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-2">Cart</h2>

        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <p>{item.name} x {item.qty}</p>
            <p>₹{item.price * item.qty}</p>
          </div>
        ))}

        <hr className="my-2" />

        <h3 className="font-bold">Total: ₹{total}</h3>

        <button
          onClick={() => navigate("/invoice", { state: { customer, cart, total } })}
          className="mt-3 bg-green-600 text-white px-4 py-2 rounded"
        >
          Generate Invoice
        </button>
      </div>

    </div>
  );
}

export default Billing;