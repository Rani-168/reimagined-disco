import { useState } from "react";

function Login() {
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (!name) {
      alert("Enter name");
      return;
    }

    // 🔥 Save user
    localStorage.setItem("user", name);

    // Redirect
    window.location.href = "/";
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">

  <div className="bg-white p-8 rounded-2xl shadow-xl w-80 text-center">
    <h2 className="text-2xl font-bold mb-4">🔐 Login</h2>

    <input
      type="text"
      placeholder="Enter your name"
      className="border p-2 w-full mb-4 rounded"
      onChange={(e) => setName(e.target.value)}
    />

    <button
      onClick={handleLogin}
      className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
    >
      Login
    </button>
  </div>
</div>
  );
}

export default Login;