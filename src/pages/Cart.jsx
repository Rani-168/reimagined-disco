import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem } =
    useContext(CartContext);

  // ✅ Total Price
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
   <div className="p-6">
  <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>

  {cart.map((item) => (
    <div className="flex justify-between items-center bg-white shadow p-4 rounded mb-4">
      
      <div className="flex items-center gap-4">
        <img src={item.image} className="h-16" />
        <div>
          <h2 className="font-bold">{item.name}</h2>
          <p>₹{item.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button onClick={() => decreaseQty(item.id)}>-</button>
        <span>{item.qty}</span>
        <button onClick={() => increaseQty(item.id)}>+</button>
      </div>

      <button
        onClick={() => removeItem(item.id)}
        className="text-red-500"
      >
        Remove
      </button>
    </div>
  ))}

  <h2 className="text-xl font-bold mt-6">
    Total: ₹{total}
  </h2>
</div>
  );
}

export default Cart;