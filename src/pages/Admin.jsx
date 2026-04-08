import { useEffect, useState } from "react";

function Admin() {
  const [orders, setOrders] = useState([]);
  const [walkins, setWalkins] = useState([]);

  useEffect(() => {
    const o = JSON.parse(localStorage.getItem("orders")) || [];
    const w = JSON.parse(localStorage.getItem("walkins")) || [];

    setOrders(o);
    setWalkins(w);
  }, []);

  // 💰 Calculations
  const totalSales = orders.reduce((acc, o) => acc + o.total, 0);
  const today = new Date().toDateString();

  const todayOrders = orders.filter(
    (o) => new Date(o.date).toDateString() === today
  );

  const todaySales = todayOrders.reduce((acc, o) => acc + o.total, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-sky-100 px-4 py-8">
      <div className="max-w-7xl mx-auto space-y-8">

        <div className="rounded-[32px] bg-white/95 border border-slate-200 shadow-2xl p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-sky-500 font-semibold mb-2">Admin Dashboard</p>
              <h1 className="text-4xl font-extrabold text-slate-900">Hi, welcome back</h1>
              <p className="mt-3 text-slate-600 max-w-2xl">
                Review store activity, track walk-ins, and monitor sales from one clean dashboard.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-900 px-6 py-4 text-white shadow-xl shadow-slate-900/20">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Today</p>
              <p className="mt-2 text-2xl font-bold">{new Date().toDateString()}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[28px] bg-gradient-to-br from-sky-500 to-indigo-600 p-6 text-white shadow-xl shadow-sky-300/30 hover:-translate-y-1 transform transition">
            <p className="text-sm uppercase tracking-[0.24em] opacity-80">Total Orders</p>
            <p className="mt-4 text-4xl font-bold">{orders.length}</p>
          </div>

          <div className="rounded-[28px] bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white shadow-xl shadow-emerald-300/30 hover:-translate-y-1 transform transition">
            <p className="text-sm uppercase tracking-[0.24em] opacity-80">Total Sales</p>
            <p className="mt-4 text-4xl font-bold">₹{totalSales}</p>
          </div>

          <div className="rounded-[28px] bg-gradient-to-br from-amber-400 to-orange-500 p-6 text-white shadow-xl shadow-amber-300/30 hover:-translate-y-1 transform transition">
            <p className="text-sm uppercase tracking-[0.24em] opacity-80">Walk-ins</p>
            <p className="mt-4 text-4xl font-bold">{walkins.length}</p>
          </div>

          <div className="rounded-[28px] bg-gradient-to-br from-purple-500 to-fuchsia-600 p-6 text-white shadow-xl shadow-purple-300/30 hover:-translate-y-1 transform transition">
            <p className="text-sm uppercase tracking-[0.24em] opacity-80">Today Sales</p>
            <p className="mt-4 text-4xl font-bold">₹{todaySales}</p>
          </div>
        </div>

        <div className="rounded-[32px] bg-white border border-slate-200 shadow-2xl p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">🧾 Recent Orders</h2>
              <p className="text-slate-500">Latest order activity from your store.</p>
            </div>
            <div className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">Total: {orders.length} orders</div>
          </div>

          {orders.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-500">
              No orders yet. Once orders arrive, they will appear here.
            </div>
          ) : (
            <div className="space-y-4">
              {orders.slice().reverse().map((o, i) => (
                <div
                  key={i}
                  className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 md:grid-cols-[1.2fr_0.8fr] lg:grid-cols-[1.4fr_0.6fr] items-center hover:bg-white transition"
                >
                  <div>
                    <p className="text-lg font-semibold text-slate-900">Order #{orders.length - i}</p>
                    <p className="mt-1 text-sm text-slate-500">{new Date(o.date).toLocaleString()}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm">
                      ₹{o.total}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Total amount</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;