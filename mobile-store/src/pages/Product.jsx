import { useParams } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Product() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id == id);

  return (
    <div className="p-6">
      <img src={product.image} className="h-60" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>₹{product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;