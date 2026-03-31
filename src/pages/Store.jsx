import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

function Store() {
  const { products } = useContext(StoreContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Filter
  const filtered = products.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || p.category === category)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

  {/* 🏪 HEADER */}
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-3xl font-bold text-gray-800">
      🏪 Store Inventory
    </h1>

    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
      Total Products: {filtered.length}
    </span>
  </div>

  {/* 🔍 FILTER BAR */}
  <div className="bg-white/80 backdrop-blur-md border border-gray-200 p-5 rounded-2xl shadow-lg mb-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

    {/* Search */}
    <div className="relative w-full md:w-1/3">
      <input
        type="text"
        placeholder="🔍 Search product..."
        className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 outline-none"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    {/* Category */}
    <select
      onChange={(e) => setCategory(e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-full bg-white focus:ring-2 focus:ring-blue-500 outline-none"
      value={category}
    >
      <option value="All">📱 All Brands</option>
      <option>Apple</option>
      <option>Samsung</option>
      <option>Realme</option>
    </select>

    {/* Clear Button */}
    <button
      onClick={() => {
        setSearch("");
        setCategory("All");
      }}
      className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
    >
      Clear
    </button>
  </div>

  {/* 🛍️ PRODUCTS */}
  {filtered.length === 0 ? (
    <div className="text-center text-gray-500 mt-10">
      😔 No products found
    </div>
  ) : (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {filtered.map((p) => (
        <div
          key={p.id}
          className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300"
        >

          {/* Product Name */}
          <h2 className="font-bold text-lg text-gray-800 mb-2">
            {p.name}
          </h2>

          {/* Price */}
          <p className="text-green-600 font-semibold mb-2">
            ₹{p.price}
          </p>

          {/* Stock Badge */}
          <span
            className={`inline-block px-3 py-1 text-sm rounded-full font-semibold ${
              p.stock > 0
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {p.stock > 0 ? `In Stock: ${p.stock}` : "Out of Stock"}
          </span>

        </div>
      ))}

    </div>
  )}
</div>
  );
}

export default Store;