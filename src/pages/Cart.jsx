import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem } =
    useContext(CartContext);

  // ✅ Total Price
  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Cart is empty</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">

          {/* ================= ITEMS ================= */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white p-4 rounded-xl shadow hover:shadow-lg"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    className="h-20 object-contain"
                    alt={item.name}
                  />
                  <div>
                    <h2 className="font-bold text-lg">{item.name}</h2>
                    <p className="text-gray-500">{item.brand}</p>
                    <p className="text-green-600 font-semibold">
                      ₹{item.price}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>

                  <span className="font-semibold">
                    {item.qty || 1}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 text-xl hover:scale-110"
                >
                  ❌
                </button>
              </div>
            ))}
          </div>

          {/* ================= SUMMARY ================= */}
          <div className="bg-white p-6 rounded-xl shadow h-fit">
            <h2 className="text-xl font-bold mb-4">Summary</h2>

            <p className="mb-2 text-gray-600">
              Total Items: <span className="font-semibold">{cart.length}</span>
            </p>

            <p className="mb-4 text-lg font-bold text-green-600">
              Total Price: ₹{total}
            </p>

            <Link
              to="/checkout"
              className="block text-center bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
            >
              Proceed to Checkout
            </Link>
          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;