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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white/95 backdrop-blur-lg rounded-[36px] border border-slate-200 shadow-2xl p-8 mb-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-purple-500 font-semibold mb-3">Inventory Management</p>
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                🏪 Store Inventory
              </h1>
              <p className="text-gray-600 mt-4 max-w-2xl">
                Manage your store inventory with real-time updates and quick filtering.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-purple-100 to-blue-100 px-6 py-4 shadow-lg">
              <p className="text-sm uppercase tracking-[0.24em] text-purple-600 font-semibold">Products</p>
              <p className="mt-2 text-4xl font-bold text-purple-700">{filtered.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-lg rounded-[32px] border border-slate-200 shadow-xl p-6 mb-10">
          <div className="grid gap-5 lg:grid-cols-[1fr_200px_auto]">
            
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">🔍</span>
              <input
                type="text"
                placeholder="Search products by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border-2 border-slate-300 rounded-full pl-12 pr-4 py-3 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300"
              />
            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border-2 border-slate-300 rounded-full px-4 py-3 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300"
            >
              <option value="All">📱 All Brands</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="OnePlus">OnePlus</option>
              <option value="Realme">Realme</option>
            </select>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="rounded-full bg-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-300"
            >
              Clear
            </button>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-[28px] border border-dashed border-slate-300 bg-white/80 p-20 text-center shadow-sm">
            <div className="text-6xl mb-4">😔</div>
            <p className="text-xl font-semibold text-slate-800">No products found</p>
            <p className="text-slate-600 mt-2">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <h2 className="line-clamp-2 text-xl font-semibold text-slate-900 mb-3">
                  {p.name}
                </h2>

                <p className="text-3xl font-bold text-purple-600 mb-4">
                  ₹{p.price}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                      p.stock > 0
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {p.stock > 0 ? `📦 ${p.stock} left` : "Out of Stock"}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                    {p.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Store;