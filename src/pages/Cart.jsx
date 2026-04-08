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
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">

        <div className="mb-12">
          <h1 className="text-5xl font-black text-slate-900">🛒 Shopping Cart</h1>
          <p className="mt-3 text-lg text-slate-600">Review your items and proceed to checkout</p>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-3xl bg-slate-50 p-20 text-center border-2 border-dashed border-slate-300">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-3xl font-bold text-slate-900">Your cart is empty</p>
            <p className="text-slate-600 mt-3 mb-6">Add some amazing phones to get started</p>
            <Link
              to="/"
              className="inline-block rounded-2xl bg-indigo-600 px-8 py-4 font-bold text-white hover:bg-indigo-700 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="grid gap-6 rounded-2xl border-2 border-slate-200 bg-white p-6 sm:grid-cols-[120px_1fr_auto]"
                >
                  
                  <div className="rounded-xl bg-slate-100 p-4 flex items-center justify-center h-fit">
                    <img
                      src={item.image}
                      className="w-20 h-20 object-contain"
                      alt={item.name}
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-slate-900">{item.name}</h2>
                    <p className="text-sm text-slate-600 mt-1">{item.brand}</p>
                    <p className="mt-3 text-2xl font-bold text-indigo-600">₹{item.price}</p>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="rounded-lg bg-red-50 px-3 py-2 text-sm font-bold text-red-600 hover:bg-red-100 transition"
                    >
                      Remove
                    </button>

                    <div className="flex items-center gap-3 rounded-lg border-2 border-slate-200 px-2 py-1">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-1 font-bold text-slate-700 hover:text-slate-900"
                      >
                        −
                      </button>
                      <span className="w-6 text-center font-bold text-slate-900">
                        {item.qty || 1}
                      </span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-1 font-bold text-slate-700 hover:text-slate-900"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-2xl border-2 border-slate-300 bg-slate-50 p-8 sticky top-6">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b-2 border-slate-200">
                <div className="flex justify-between text-slate-700">
                  <span>Subtotal</span>
                  <span className="font-bold">₹{total}</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Shipping</span>
                  <span className="font-bold text-emerald-600">FREE</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Tax (18%)</span>
                  <span className="font-bold">₹{Math.round(total * 0.18)}</span>
                </div>
              </div>

              <div className="mb-8 flex justify-between">
                <span className="text-lg font-black text-slate-900">Total</span>
                <span className="text-3xl font-black text-indigo-600">
                  ₹{total + Math.round(total * 0.18)}
                </span>
              </div>

              <Link
                to="/checkout"
                className="block w-full rounded-2xl bg-indigo-600 py-4 text-center font-bold text-white hover:bg-indigo-700 transition mb-3"
              >
                Checkout
              </Link>

              <button
                onClick={() => window.history.back()}
                className="w-full rounded-2xl border-2 border-slate-300 py-3 font-bold text-slate-700 hover:bg-slate-100 transition"
              >
                Continue Shopping
              </button>

              <div className="mt-6 space-y-3 rounded-xl bg-white p-4 text-sm text-slate-600">
                <p>✓ Free delivery on all orders</p>
                <p>✓ Secure checkout</p>
                <p>✓ 15-day easy returns</p>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;