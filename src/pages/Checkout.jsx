import { useState, useEffect, useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const { reduceStock } = useContext(StoreContext);

  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: "",
  });

  // 🔥 Load previous customer
  useEffect(() => {
    const savedUser = localStorage.getItem("customer");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // 🔥 Handle input
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // 🔥 Place Order
  const handleSubmit = () => {
    const loginUser = localStorage.getItem("user");

    if (!loginUser) {
      alert("Please login first ❌");
      return;
    }

    if (!user.name || !user.phone || !user.address) {
      alert("Fill all details ❌");
      return;
    }

    // Save customer
    localStorage.setItem("customer", JSON.stringify(user));

    const order = {
      user: loginUser,
      customer: user,
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price, 0),
      date: new Date().toLocaleString(),
    };

    // Save orders
    const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...oldOrders, order]));

    // Reduce stock
    cart.forEach((item) => {
      reduceStock(item.id);
    });

    alert("Order placed successfully ✅");

    // Clear cart
    clearCart();
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-500">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-2xl font-bold mb-6 text-center">
          🧾 Checkout
        </h1>

        {/* FORM */}
        <input
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="border p-2 w-full mb-3 rounded"
        />

        <input
          name="phone"
          value={user.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="border p-2 w-full mb-3 rounded"
        />

        <textarea
          name="address"
          value={user.address}
          onChange={handleChange}
          placeholder="Address"
          className="border p-2 w-full mb-3 rounded"
        />

        {/* CART SUMMARY */}
        <div className="mb-4">
          <h2 className="font-bold mb-2">🛒 Items:</h2>

          {cart.map((item, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))}

          <hr className="my-2" />

          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>
              ₹{cart.reduce((acc, item) => acc + item.price, 0)}
            </span>
          </div>
        </div>


        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 transition"
        >
          ✅ Place Order
        </button>

      </div>
    </div>
  );
}

export default Checkout;