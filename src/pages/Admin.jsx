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

  // 💰 Total Sales
  const totalSales = orders.reduce((acc, o) => acc + o.total, 0);
  const today = new Date().toDateString();

const todayOrders = orders.filter(
  (o) => new Date(o.date).toDateString() === today
);

const todaySales = todayOrders.reduce((acc, o) => acc + o.total, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

  <h1 className="text-3xl font-bold mb-6">📊 Admin Dashboard</h1>

  <div className="grid md:grid-cols-4 gap-4">

    <div className="bg-blue-500 text-white p-6 rounded-xl shadow">
      <h2>Total Orders</h2>
      <p className="text-2xl">{orders.length}</p>
    </div>

    <div className="bg-green-500 text-white p-6 rounded-xl shadow">
      <h2>Total Sales</h2>
      <p className="text-2xl">₹{totalSales}</p>
    </div>

    <div className="bg-yellow-500 text-white p-6 rounded-xl shadow">
      <h2>Walk-ins</h2>
      <p className="text-2xl">{walkins.length}</p>
    </div>

    <div className="bg-purple-500 text-white p-6 rounded-xl shadow">
      <h2>Today Sales</h2>
      <p className="text-2xl">₹{todaySales}</p>
    </div>

  </div>
</div>
  );
}

export default Admin;