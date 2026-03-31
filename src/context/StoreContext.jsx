import { createContext, useEffect, useState } from "react";
import storeProducts from "../data/storeProducts";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("products"));
    return Array.isArray(stored) && stored.length > 0 ? stored : storeProducts;
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Add product
  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  // Delete product
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // Update product
  const updateProduct = (updated) => {
    setProducts(
      products.map((p) => (p.id === updated.id ? updated : p))
    );
  };

  // Reduce stock
  const reduceStock = (id) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        updateProduct,
        reduceStock,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};