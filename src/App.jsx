import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import { useState } from "react";  
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import WalkIn from "./pages/WalkIn";






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
         <Route path="/checkout" element={<Checkout />} />
         <Route path="/login" element={<Login />} />
         <Route
  path="/checkout"
  element={
    <ProtectedRoute>
      <Checkout />
    </ProtectedRoute>
  }
/>

<Route
  path="/orders"
  element={
    <ProtectedRoute>
      <Orders />
    </ProtectedRoute>
  }
/>
<Route path="/profile" element={<Profile />} />
<Route path="/walkin" element={<WalkIn />} />
      </Routes>
     
         <Chatbot />
    </BrowserRouter>
  );
}

export default App;