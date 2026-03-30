export function Orders() {
  const user = localStorage.getItem("user");
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const userOrders = orders.filter((o) => o.user === user);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {userOrders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        userOrders.map((order, i) => (
          <div key={i} className="bg-white p-5 rounded-xl shadow mb-4">
            <p className="text-sm text-gray-500">{order.date}</p>

            {order.items?.map((item, idx) => (
              <div key={idx} className="flex justify-between">
                <span>{item.name}</span>
                <span>₹{item.price} x {item.qty}</span>
              </div>
            ))}

            <h2 className="font-bold mt-2">Total ₹{order.total}</h2>
          </div>
        ))
      )}
    </div>
  );
}
export default Orders;