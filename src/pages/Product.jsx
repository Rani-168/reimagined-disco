import { useParams } from "react-router-dom";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function Product() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id == id);

  if (!product) return <p className="p-6">Product not found</p>;

  // 🛒 Add to Cart Function
 

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">

        {product ? (
          <>
            <div className="mb-8">
              <button onClick={() => window.history.back()} className="text-sm font-semibold text-slate-600 hover:text-slate-900">
                ← Back
              </button>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
              
              <div className="flex flex-col gap-6">
                <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-2xl">
                  <div className="aspect-square rounded-2xl bg-white/5 flex items-center justify-center backdrop-blur">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-4/5 h-4/5 object-contain drop-shadow-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {product.ram && (
                    <div className="rounded-2xl bg-slate-100 p-4 text-center">
                      <p className="text-xs uppercase tracking-wider text-slate-600">RAM</p>
                      <p className="mt-2 text-xl font-bold text-slate-900">{product.ram}</p>
                    </div>
                  )}
                  {product.storage && (
                    <div className="rounded-2xl bg-slate-100 p-4 text-center">
                      <p className="text-xs uppercase tracking-wider text-slate-600">Storage</p>
                      <p className="mt-2 text-xl font-bold text-slate-900">{product.storage}</p>
                    </div>
                  )}
                  {product.battery && (
                    <div className="rounded-2xl bg-slate-100 p-4 text-center">
                      <p className="text-xs uppercase tracking-wider text-slate-600">Battery</p>
                      <p className="mt-2 text-xl font-bold text-slate-900">{product.battery}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="inline-block rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 mb-4">
                    {product.brand}
                  </div>
                  <h1 className="text-5xl font-black text-slate-900 leading-tight mb-4">
                    {product.name}
                  </h1>

                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-4xl">⭐</span>
                      <div>
                        <p className="text-2xl font-bold text-slate-900">{product.rating}</p>
                        <p className="text-sm text-slate-500">({product.reviews} reviews)</p>
                      </div>
                    </div>

                    <div className="h-12 w-px bg-slate-200"></div>

                    <div>
                      <p className="text-3xl font-black text-indigo-600">₹{product.price}</p>
                      {product.oldPrice && (
                        <p className="text-sm line-through text-slate-400 mt-1">₹{product.oldPrice}</p>
                      )}
                    </div>
                  </div>

                  {product.discount && (
                    <div className="inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-700 mb-6">
                      {product.discount}
                    </div>
                  )}

                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    Experience premium performance with cutting-edge technology. Perfect for everyday use and demanding applications.
                  </p>
                </div>

                <div className="rounded-3xl border-2 border-slate-200 p-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Specifications</h2>

                  <div className="space-y-4">
                    {product.display && (
                      <div className="flex justify-between border-b border-slate-200 pb-4">
                        <span className="font-semibold text-slate-700">Display</span>
                        <span className="text-slate-600">{product.display}</span>
                      </div>
                    )}
                    {product.camera && (
                      <div className="flex justify-between border-b border-slate-200 pb-4">
                        <span className="font-semibold text-slate-700">Camera</span>
                        <span className="text-slate-600">{product.camera}</span>
                      </div>
                    )}
                    <div className="flex justify-between pb-4">
                      <span className="font-semibold text-slate-700">🚚 Delivery</span>
                      <span className="font-semibold text-emerald-600">Free</span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <button
                    onClick={() => {
                      addToCart(product);
                      alert("✅ Added to cart!");
                    }}
                    className="group rounded-2xl bg-indigo-600 py-5 font-bold text-white shadow-lg transition duration-300 hover:bg-indigo-700 hover:shadow-xl"
                  >
                    Add to Cart
                  </button>

                  <button className="rounded-2xl border-2 border-indigo-600 py-5 font-bold text-indigo-600 transition duration-300 hover:bg-indigo-50">
                    Buy Now
                  </button>
                </div>

                <div className="space-y-3 rounded-2xl bg-emerald-50 p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <p className="font-semibold text-slate-900">15-day easy returns</p>
                      <p className="text-sm text-slate-600">No questions asked</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <p className="font-semibold text-slate-900">Secure checkout</p>
                      <p className="text-sm text-slate-600">All payment methods accepted</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <p className="font-semibold text-slate-900">1-year warranty</p>
                      <p className="text-sm text-slate-600">Full coverage included</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="rounded-3xl bg-slate-100 p-20 text-center">
            <p className="text-2xl font-bold text-slate-900">Product not found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;