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
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">🏪 Store Inventory</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search product..."
        className="border p-2 mb-4 w-full rounded"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category */}
      <select
        className="border p-2 mb-4 rounded"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>All</option>
        <option>Apple</option>
        <option>Samsung</option>
        <option>Realme</option>
      </select>

      {/* Products */}
      <div className="grid md:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <div key={p.id} className="bg-white p-4 shadow rounded">

            <h2 className="font-bold">{p.name}</h2>
            <p>₹{p.price}</p>

            <p className={`font-bold ${
              p.stock > 0 ? "text-green-600" : "text-red-500"
            }`}>
              {p.stock > 0 ? `Stock: ${p.stock}` : "Out of Stock"}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;