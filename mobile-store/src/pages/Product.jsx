import { useParams } from "react-router-dom";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function Product({ cart, setCart }) {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id == id);

  if (!product) return <p className="p-6">Product not found</p>;

  // 🛒 Add to Cart Function
 

  return (
    <div className="p-6 grid md:grid-cols-2 gap-8">
      
      {/* 🖼 Image Section */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-contain"
        />
      </div>

      {/* 📄 Details Section */}
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>

        {/* ⭐ Rating */}
        <p className="text-green-600 mt-2">
          ⭐ {product.rating} ({product.reviews} reviews)
        </p>

        {/* 💰 Price */}
        <div className="mt-3">
          <span className="text-2xl font-bold text-blue-600">
            ₹{product.price}
          </span>
          <span className="line-through text-gray-500 ml-2">
            ₹{product.oldPrice}
          </span>
          <span className="text-green-600 ml-2">
            {product.discount}
          </span>
        </div>

        {/* 🚚 Delivery */}
        <p className="mt-2 text-gray-600">🚚 Free Delivery</p>

        {/* 📦 Highlights */}
        <div className="mt-5">
          <h2 className="font-semibold text-lg">Product Highlights</h2>

          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>RAM: {product.ram}</li>
            <li>Storage: {product.storage}</li>
            <li>Camera: {product.camera}</li>
            <li>Battery: {product.battery}</li>
            <li>Display: {product.display}</li>
          </ul>
        </div>

        {/* 📋 Additional Details */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg">Additional Details</h2>

          <div className="mt-2 text-gray-700 space-y-1">
            <p><b>Brand:</b> {product.brand}</p>
            <p><b>Battery:</b> {product.battery}</p>
            <p><b>Camera:</b> {product.camera}</p>
            <p><b>Display:</b> {product.display}</p>
          </div>
        </div>

        {/* 🛒 Buttons */}
        <div className="mt-6 flex gap-4">
        <button
  onClick={() => {
    addToCart(product); // ✅ correct
    alert("Added to cart ✅");
  }}
  className="bg-yellow-500 text-white px-6 py-2 rounded"
>
  Add to Cart
</button>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;