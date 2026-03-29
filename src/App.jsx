import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import { useState } from "react";  


function App() {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/shop" element={<Shop />} /> 
        <Route 
  path="/product/:id" 
  element={<Product cart={cart} setCart={setCart} />} 
/>
        <Route path="/cart" element={<Cart />} />
      
      </Routes>
         <Chatbot />
    </BrowserRouter>
  );
}

export default App;