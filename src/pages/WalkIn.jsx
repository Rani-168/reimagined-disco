import { useState, useEffect } from "react";
import products from "../data/products";

function WalkIn() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [customers, setCustomers] = useState([]);

  // 🔥 Load existing customers
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("walkins")) || [];
    setCustomers(data);
  }, []);

  // 🔥 Add Customer
  const handleAdd = () => {
    if (!name || !phone || !product) {
      alert("Fill all fields ❌");
      return;
    }

    const token = customers.length + 1;

    const newCustomer = {
      id: Date.now(),
      name,
      phone,
      product,
      token,
      time: new Date().toLocaleTimeString(),
    };

    const updated = [...customers, newCustomer];

    setCustomers(updated);
    localStorage.setItem("walkins", JSON.stringify(updated));

    // Clear form
    setName("");
    setPhone("");
    setProduct("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🏪 Walk-in Customers</h1>

      {/* Form */}
      <div className="bg-white p-4 shadow rounded mb-6">
        <input
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="border p-2 w-full mb-2"
        >
          <option value="">Select Product</option>
          {products.map((p) => (
            <option key={p.id} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>

        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Generate Token
        </button>
      </div>

      {/* List */}
      <h2 className="text-xl font-bold mb-2">📋 Customer List</h2>

      {customers.map((c) => (
        <div
          key={c.id}
          className="border p-3 mb-2 rounded shadow flex justify-between"
        >
          <div>
            <p><b>{c.name}</b> ({c.phone})</p>
            <p className="text-sm text-gray-500">{c.product}</p>
          </div>

          <div className="text-right">
            <p className="text-blue-600 font-bold">Token #{c.token}</p>
            <p className="text-xs">{c.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WalkIn;