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
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-slate-50 to-blue-100 py-10">
      <div className="max-w-6xl mx-auto px-4">

        <div className="bg-white/95 border border-slate-200 shadow-2xl rounded-[32px] p-10 mb-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-500 font-semibold mb-3">Walk-In Service</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                🏪 Simple customer token management
              </h1>
              <p className="text-slate-600 mt-4 max-w-2xl">
                Add walk-in customers quickly and keep tokens organized for faster billing service.
              </p>
            </div>

            <div className="inline-flex items-center gap-4 rounded-full bg-slate-100 px-6 py-4 shadow-inner shadow-slate-200">
              <div className="text-slate-400">Total customers</div>
              <div className="rounded-full bg-sky-600 px-4 py-2 text-white font-bold text-lg shadow-lg">
                {customers.length}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-gradient-to-br from-sky-600 to-cyan-500 p-6 text-white shadow-xl">
              <h2 className="text-lg font-semibold">Fast Check-in</h2>
              <p className="mt-3 text-sm text-sky-100/90">Save customer info and assign a token in seconds.</p>
            </div>
            <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl">
              <h2 className="text-lg font-semibold">Instant Tokens</h2>
              <p className="mt-3 text-sm text-slate-300">Each new entry receives a unique token number for queue tracking.</p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl">
              <h2 className="text-lg font-semibold text-slate-900">Ready for Billing</h2>
              <p className="mt-3 text-sm text-slate-600">Quickly move customers from the queue to the billing desk.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 shadow-xl rounded-[28px] p-8 mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Add new walk-in customer</h2>
          <div className="grid gap-5 md:grid-cols-3">
            <input
              placeholder="👤 Customer Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-3xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 shadow-sm outline-none transition duration-300 focus:border-sky-400 focus:bg-white"
            />
            <input
              placeholder="📞 Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-3xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 shadow-sm outline-none transition duration-300 focus:border-sky-400 focus:bg-white"
            />
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="rounded-3xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 shadow-sm outline-none transition duration-300 focus:border-sky-400 focus:bg-white"
            >
              <option value="">📱 Select Product</option>
              {products.map((p) => (
                <option key={p.id}>{p.name}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleAdd}
            className="mt-8 w-full rounded-3xl bg-gradient-to-r from-sky-600 to-cyan-500 py-4 text-lg font-semibold text-white shadow-xl shadow-sky-300/40 transition duration-300 hover:from-sky-700 hover:to-cyan-600"
          >
            🎟️ Generate Token
          </button>
        </div>

        {customers.length === 0 ? (
          <div className="rounded-[28px] border border-dashed border-slate-300 bg-white/80 p-12 text-center text-slate-500 shadow-sm">
            <p className="text-xl font-semibold text-slate-800">No walk-in customers yet</p>
            <p className="mt-3">Start by adding a customer to generate the first token.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {customers.map((c) => (
              <div
                key={c.id}
                className="grid gap-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl sm:grid-cols-[1.8fr_1fr] lg:grid-cols-[2fr_1fr]"
              >
                <div>
                  <p className="text-xl font-semibold text-slate-900">{c.name}</p>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">📱 {c.product}</span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">📞 {c.phone}</span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">🕒 {c.time}</span>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-4 text-right">
                  <div>
                    <p className="text-4xl font-extrabold text-sky-600">#{c.token}</p>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Token ID</p>
                  </div>
                  <button
                    onClick={() => navigate(`/billing/${c.id}`)}
                    className="rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-300/30 transition duration-300 hover:from-emerald-600 hover:to-teal-600"
                  >
                    Start Billing
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WalkIn;