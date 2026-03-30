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
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white p-4 rounded-xl shadow mb-6 flex flex-wrap gap-4">
        <input
          placeholder="Search..."
          className="border p-2 rounded w-full md:w-1/3"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setBrand(e.target.value)} className="border p-2 rounded">
          <option value="">All Brands</option>
          <option>Apple</option>
          <option>Samsung</option>
        </select>

        <select onChange={(e) => setPrice(e.target.value)} className="border p-2 rounded">
          <option value="">All Prices</option>
          <option value="30000">Below 30K</option>
          <option value="60000">Below 60K</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
export default Shop;