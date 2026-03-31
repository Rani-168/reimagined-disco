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
   <div className="max-w-7xl mx-auto px-4 py-6">

  {/* 🔍 FILTER BAR */}
  <div className="bg-white/80 backdrop-blur-md border border-gray-200 p-5 rounded-2xl shadow-lg mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

    {/* Search */}
    <div className="relative w-full md:w-1/3">
      <input
        type="text"
        placeholder="🔍 Search mobiles..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 outline-none transition"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    {/* Filters */}
    <div className="flex flex-wrap gap-3">

      {/* Brand */}
      <select
        onChange={(e) => setBrand(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-full bg-white hover:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none"
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
        className="px-4 py-2 border border-gray-300 rounded-full bg-white hover:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none"
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
    <div className="text-center text-gray-500 mt-10">
      😔 No products found
    </div>
  ) : (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filtered.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  )}

</div>
  );
}
export default Shop;