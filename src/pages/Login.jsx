import { useState } from "react";

function Login() {
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (!name) return alert("Enter name");

    localStorage.setItem("user", name);
    window.location.href = "/";
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          className="border p-2 w-full mb-4 rounded"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;