import { useState } from "react";

function Login() {
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (!name) return alert("Enter name");

    localStorage.setItem("user", name);
    window.location.href = "/";
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
  
  <div className="bg-white p-8 rounded-2xl shadow-2xl w-80 transform transition duration-300 hover:scale-105">
    
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
      Welcome Back 👋
    </h2>

    <input
      className="border border-gray-300 p-2 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      placeholder="Enter Name"
      onChange={(e) => setName(e.target.value)}
    />

    <button
      onClick={handleLogin}
      className="bg-blue-600 text-white w-full py-2 rounded-lg font-semibold shadow-md 
                 hover:bg-blue-700 hover:shadow-lg transition duration-300"
    >
      Login
    </button>

    <p className="text-center text-sm text-gray-500 mt-4">
      Simple login for demo 🚀
    </p>

  </div>
</div>
  );
}

export default Login;