import { useState, useEffect } from "react";
import products from "../data/products";

export function WalkIn() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [customers, setCustomers] = useState([]);

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
      token: Date.now(),
      time: new Date().toLocaleTimeString(),
    };

    const updated = [...customers, newCustomer];
    setCustomers(updated);
    localStorage.setItem("walkins", JSON.stringify(updated));

    setName("");
    setPhone("");
    setProduct("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white p-5 rounded-xl shadow mb-6">
        <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className="border p-2 w-full mb-2 rounded" />
        <input placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} className="border p-2 w-full mb-2 rounded" />

        <select value={product} onChange={(e)=>setProduct(e.target.value)} className="border p-2 w-full mb-2 rounded">
          <option value="">Select Product</option>
          {products.map((p)=> <option key={p.id}>{p.name}</option>)}
        </select>

        <button onClick={handleAdd} className="bg-blue-600 text-white w-full py-2 rounded">Generate Token</button>
      </div>

      {customers.map((c)=>(
        <div key={c.id} className="bg-white p-4 rounded shadow mb-2 flex justify-between">
          <div>
            <p className="font-bold">{c.name}</p>
            <p className="text-sm">{c.product}</p>
          </div>
          <div className="text-right">
            <p className="text-blue-600">#{c.token}</p>
            <p className="text-xs">{c.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default WalkIn;