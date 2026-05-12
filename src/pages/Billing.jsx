import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";

function Billing() {
  const { id } = useParams();
  const navigate = useNavigate();

  const customers = JSON.parse(localStorage.getItem("walkins")) || [];
  const customer = customers.find((c) => c.id == id);

  const [cart, setCart] = useState([]);
  const [customName, setCustomName] = useState(customer?.product || "");
  const [customPrice, setCustomPrice] = useState("");

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

  const addCustomProduct = () => {
    const price = Number(customPrice);
    if (!customName.trim() || !price || price <= 0) return;

    const customItem = {
      id: `custom-${Date.now()}`,
      name: customName,
      price,
      qty: 1,
    };

    setCart([...cart, customItem]);
    setCustomName("");
    setCustomPrice("");
  };

  const updatePrice = (id, priceValue) => {
    const price = Number(priceValue);
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, price: isNaN(price) ? item.price : price } : item
      )
    );
  };

  const updateQty = (id, qtyValue) => {
    const qty = Number(qtyValue);
    if (qty < 1) return;
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty } : item
      )
    );
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

      <div className="grid gap-4 lg:grid-cols-2 mb-6">
        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Customer product</h2>
          <div className="mb-4">
            <label className="block text-sm text-slate-600 mb-2">Product Name</label>
            <input
              type="text"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder="Enter product name"
              className="w-full rounded border border-slate-300 px-4 py-3 outline-none focus:border-sky-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-slate-600 mb-2">Product Price</label>
            <input
              type="number"
              value={customPrice}
              onChange={(e) => setCustomPrice(e.target.value)}
              placeholder="Enter price"
              className="w-full rounded border border-slate-300 px-4 py-3 outline-none focus:border-sky-400"
            />
          </div>
          <button
            onClick={addCustomProduct}
            className="w-full rounded bg-slate-900 text-white py-3 font-semibold hover:bg-slate-700 transition"
          >
            Add product with price
          </button>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Product catalogue</h2>
          <div className="grid gap-3">
            {products.map((p) => (
              <div key={p.id} className="rounded border border-slate-200 p-3">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">{p.name}</h3>
                    <p className="text-sm text-slate-500">₹{p.price}</p>
                  </div>
                  <button
                    onClick={() => addToCart(p)}
                    className="rounded bg-sky-600 px-3 py-2 text-white text-sm hover:bg-sky-700 transition"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-4">Cart</h2>

        {cart.length === 0 ? (
          <p className="text-slate-500">No items have been added yet.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="grid gap-3 md:grid-cols-[1.5fr_1fr_1fr_1fr] items-center rounded border border-slate-200 p-3">
                <div>
                  <p className="font-semibold">{item.name}</p>
                </div>
                <div>
                  <label className="block text-xs text-slate-500">Qty</label>
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) => updateQty(item.id, e.target.value)}
                    className="w-full rounded border border-slate-300 px-3 py-2 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500">Price</label>
                  <input
                    type="number"
                    min="0"
                    value={item.price}
                    onChange={(e) => updatePrice(item.id, e.target.value)}
                    className="w-full rounded border border-slate-300 px-3 py-2 outline-none"
                  />
                </div>
                <div className="text-right">
                  <p className="font-semibold">₹{item.price * item.qty}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <hr className="my-4" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-bold">Total: ₹{total}</h3>
          <button
            onClick={() => navigate("/invoice", { state: { customer, cart, total } })}
            className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition"
            disabled={cart.length === 0}
          >
            Generate Invoice
          </button>
        </div>
      </div>

    </div>
  );
}

export default Billing;