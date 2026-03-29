function Orders() {
  const user = localStorage.getItem("user");
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const userOrders = orders.filter((o) => o.user === user);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📦 My Orders</h1>

      {userOrders.length === 0 ? (
        <p>No orders yet ❌</p>
      ) : (
        userOrders.map((order, i) => (
          <div key={i} className="border p-4 mb-4 rounded shadow">
            <p className="text-sm text-gray-500">{order.date}</p>

            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name}</span>
                <span>₹{item.price} x {item.qty}</span>
              </div>
            ))}

            <h2 className="font-bold mt-2">Total: ₹{order.total}</h2>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;