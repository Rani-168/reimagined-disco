import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export function Shop() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

  const filtered = products.filter((item) => (
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (brand ? item.brand === brand : true) &&
    (price ? item.price <= Number(price) : true)
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            🛍️ Shop Mobiles
          </h1>
          <p className="text-gray-600 text-lg">Find your perfect device</p>
        </div>

        {/* 🔍 FILTER BAR */}
        <div className="bg-white/90 backdrop-blur-lg border border-gray-200 p-6 rounded-3xl shadow-xl mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 transform transition-all duration-300 hover:shadow-2xl">

          {/* Search */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="🔍 Search mobiles..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-full focus:ring-4 focus:ring-blue-300 focus:border-blue-500 outline-none transition-all duration-300 text-gray-700 placeholder-gray-400"
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">

            {/* Brand */}
            <select
              onChange={(e) => setBrand(e.target.value)}
              className="px-5 py-3 border-2 border-gray-300 rounded-full bg-white hover:border-blue-400 focus:ring-4 focus:ring-blue-300 focus:border-blue-500 outline-none transition-all duration-300 text-gray-700"
            >
              <option value="">📱 All Brands</option>
              <option>Apple</option>
              <option>Samsung</option>
              <option>OnePlus</option>
              <option>Realme</option>
            </select>

            {/* Price */}
            <select
              onChange={(e) => setPrice(e.target.value)}
              className="px-5 py-3 border-2 border-gray-300 rounded-full bg-white hover:border-blue-400 focus:ring-4 focus:ring-blue-300 focus:border-blue-500 outline-none transition-all duration-300 text-gray-700"
            >
              <option value="">💰 All Prices</option>
              <option value="30000">Below ₹30,000</option>
              <option value="60000">Below ₹60,000</option>
              <option value="100000">Premium</option>
            </select>

          </div>
        </div>

        {/* 🛍️ PRODUCT GRID */}
        {filtered.length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            <div className="text-6xl mb-4">😔</div>
            <p className="text-xl">No products found</p>
            <p className="text-sm mt-2">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filtered.map((item) => (
              <div key={item.id} className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
export default Shop;