import { useState, useEffect } from "react";
import products from "../data/products";
import { useNavigate } from "react-router-dom";

export function WalkIn() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("walkins")) || [];
    setCustomers(data);
  }, []);

  const handleAdd = () => {
    if (!name || !phone || !product) return;

    const newCustomer = {
      id: Date.now(),
      name,
      phone,
      product,
      token: Math.floor(1000 + Math.random() * 9000),
      time: new Date().toLocaleTimeString(),
    };

    const updated = [newCustomer, ...customers];
    setCustomers(updated);
    localStorage.setItem("walkins", JSON.stringify(updated));

    setName("");
    setPhone("");
    setProduct("");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">

      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        🏪 Walk-In Customer Token System
      </h1>

      {/* FORM */}
      <div className="bg-white/80 p-6 rounded-2xl shadow-lg mb-8">
        <div className="grid md:grid-cols-3 gap-4">

          <input
            placeholder="👤 Customer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-xl"
          />

          <input
            placeholder="📞 Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-3 rounded-xl"
          />

          <select
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="border p-3 rounded-xl"
          >
            <option value="">📱 Select Product</option>
            {products.map((p) => (
              <option key={p.id}>{p.name}</option>
            ))}
          </select>

        </div>

        <button
          onClick={handleAdd}
          className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl"
        >
          🎟️ Generate Token
        </button>
      </div>

      {/* CUSTOMER LIST */}
      {customers.length === 0 ? (
        <p className="text-center text-gray-500">
          No walk-in customers yet
        </p>
      ) : (
        <div className="space-y-4">

          {customers.map((c) => (
            <div
              key={c.id}
              className="bg-white p-4 rounded-2xl shadow flex justify-between items-center"
            >

              {/* Info */}
              <div>
                <p className="font-bold text-lg">{c.name}</p>
                <p className="text-sm text-gray-500">📱 {c.product}</p>
                <p className="text-xs text-gray-400">📞 {c.phone}</p>
              </div>

              {/* Token + Button */}
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">
                  #{c.token}
                </p>

                <button
                  onClick={() => navigate(`/billing/${c.id}`)}
                  className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Start Billing
                </button>
              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default WalkIn;