import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Shop() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

  // ✅ Filter Logic
  const filteredProducts = products.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (brand ? item.brand === brand : true) &&
      (price ? item.price <= price : true)
    );
  });

  return (
    <div className="p-6">
      
      {/* 🔍 Search + Filter UI */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search mobile..."
          className="border p-2 rounded"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Brand Filter */}
        <select
          className="border p-2 rounded"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="OnePlus">OnePlus</option>
        </select>

        {/* Price Filter */}
        <select
          className="border p-2 rounded"
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value="">All Prices</option>
          <option value="30000">Below ₹30,000</option>
          <option value="60000">Below ₹60,000</option>
          <option value="80000">Below ₹80,000</option>
        </select>
      </div>

      {/* 📱 Product List */}
      <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default Shop;