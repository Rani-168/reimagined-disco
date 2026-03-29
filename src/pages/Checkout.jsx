import { useState, useEffect } from "react";

function Checkout() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: "",
  });

  // 🔥 Load previous user (important)
  useEffect(() => {
    const savedUser = localStorage.getItem("customer");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // 🔥 Handle change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // 🔥 Save data
 const handleSubmit = () => {
  const user = localStorage.getItem("user");

  if (!user) {
    alert("Please login first ❌");
    return;
  }

  const order = {
    user,
    items: cart,
    total: cart.reduce((acc, item) => acc + item.price * item.qty, 0),
    date: new Date().toLocaleString(),
  };

  // 🔥 Save orders
  const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];
  localStorage.setItem("orders", JSON.stringify([...oldOrders, order]));

  alert("Order placed successfully ✅");
};

  return (
   <div className="min-h-screen flex justify-center items-center bg-gray-100">

  <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
    <h1 className="text-2xl font-bold mb-4 text-center">
      🧾 Checkout
    </h1>

    <input name="name" value={user.name}
      onChange={handleChange}
      placeholder="Full Name"
      className="border p-2 w-full mb-3 rounded"/>

    <input name="phone" value={user.phone}
      onChange={handleChange}
      placeholder="Phone"
      className="border p-2 w-full mb-3 rounded"/>

    <textarea name="address" value={user.address}
      onChange={handleChange}
      placeholder="Address"
      className="border p-2 w-full mb-3 rounded"/>

    <button
      onClick={() => {
        handleSubmit();
        clearCart();
      }}
      className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
    >
      ✅ Place Order
    </button>
  </div>
</div>
  );
}

export default Checkout;