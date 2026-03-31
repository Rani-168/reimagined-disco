import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import WalkIn from "./pages/WalkIn";
import Admin from "./pages/Admin";
import Billing from "./pages/Billing";
import Invoice from "./pages/Invoice";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
         <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="/shop" element={<Shop />} /> 
        <Route 
          path="/product/:id" 
          element={<Product />} 
        />
       <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

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
<Route path="/billing/:id" element={<Billing />} />
<Route path="/invoice" element={<Invoice />} />
      </Routes>
     
         <Chatbot />
    </BrowserRouter>
  );
}

export default App;