import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem } =
    useContext(CartContext);

  // ✅ Total Price
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
  <div className="min-h-screen bg-gray-100 p-6">
  <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

  {cart.length === 0 ? (
    <p className="text-center text-gray-500">Cart is empty</p>
  ) : (
    <div className="grid md:grid-cols-3 gap-6">

      {/* Items */}
      <div className="md:col-span-2 space-y-4">
        {cart.map((item) => (
          <div key={item.id}
            className="flex justify-between items-center bg-white p-4 rounded-xl shadow hover:shadow-lg">

            <div className="flex items-center gap-4">
              <img src={item.image} className="h-20" />
              <div>
                <h2 className="font-bold">{item.name}</h2>
                <p className="text-gray-500">{item.brand}</p>
                <p className="text-green-600">₹{item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={() => decreaseQty(item.id)}
                className="px-2 bg-gray-200 rounded">-</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}
                className="px-2 bg-gray-200 rounded">+</button>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500"
            >
              ❌
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">💳 Summary</h2>

        <p className="flex justify-between">
          <span>Total</span>
          <span>₹{total}</span>
        </p>

        <Link to="/checkout">
          <button className="w-full mt-4 bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  )}
</div>
  );
}

export default Cart;