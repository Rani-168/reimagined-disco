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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">

      {/* 🔥 HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          📊 Admin Dashboard
        </h1>
        <span className="text-gray-500">
          {new Date().toDateString()}
        </span>
      </div>

      {/* 📊 STATS */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">

        {/* Total Orders */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-sm opacity-80">Total Orders</h2>
          <p className="text-3xl font-bold">{orders.length}</p>
        </div>

        {/* Total Sales */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-sm opacity-80">Total Sales</h2>
          <p className="text-3xl font-bold">₹{totalSales}</p>
        </div>

        {/* Walk-ins */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-sm opacity-80">Walk-ins</h2>
          <p className="text-3xl font-bold">{walkins.length}</p>
        </div>

        {/* Today Sales */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-sm opacity-80">Today Sales</h2>
          <p className="text-3xl font-bold">₹{todaySales}</p>
        </div>

      </div>

      {/* 📦 RECENT ORDERS */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">🧾 Recent Orders</h2>

        {orders.length === 0 ? (
          <p className="text-gray-500">No orders yet</p>
        ) : (
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {orders.slice().reverse().map((o, i) => (
              <div
                key={i}
                className="flex justify-between items-center border p-3 rounded-lg hover:bg-gray-50"
              >
                <div>
                  <p className="font-semibold">Order #{i + 1}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(o.date).toLocaleString()}
                  </p>
                </div>

                <p className="text-green-600 font-bold">
                  ₹{o.total}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default Admin;