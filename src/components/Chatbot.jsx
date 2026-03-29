import { useState } from "react";
import products from "../data/products";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false); // ✅ NEW STATE

  // 🔥 Main AI Function
  const handleQuery = (queryText) => {
    const query = queryText.toLowerCase();

    let filtered = products;

    // 💰 Price
    if (query.includes("30000")) {
      filtered = filtered.filter((p) => p.price <= 30000);
    }

    // 📸 Camera
   if (query.includes("camera")) {
  filtered = filtered.filter((p) => p.camera >= 50);
}

    // 🎮 Gaming
    if (query.includes("gaming")) {
      filtered = filtered.filter((p) => p.gaming === "high");
    }

    let botText = "";

    if (filtered.length > 0) {
      botText = "🔥 Best options:\n";
      filtered.forEach((p) => {
        botText += `👉 ${p.name} - ₹${p.price}\n`;
      });
    } else {
      botText = "❌ No phones found";
    }

   setMessages((prev) => [
  ...prev,
  { type: "user", text: queryText },
  { type: "bot", text: botText }
]);
  };

  return (
    <>
      {/* 🤖 Floating Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full shadow-lg"
      >
        💬
      </button>

      {/* 💬 Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-5 w-80 bg-white shadow-2xl rounded-2xl p-4 border border-gray-200">

  {/* Header */}
  <div className="flex justify-between items-center mb-2 border-b pb-2">
    <h2 className="font-bold text-blue-600">🤖 Smart AI Assistant</h2>
    <button onClick={() => setOpen(false)}>❌</button>
  </div>

  {/* Messages */}
  <div className="h-52 overflow-y-auto mb-3 space-y-2 text-sm">
    {messages.map((msg, i) => (
      <div
        key={i}
        className={`p-2 rounded-lg max-w-[80%] ${
          msg.type === "user"
            ? "bg-blue-500 text-white ml-auto"
            : "bg-gray-200"
        }`}
      >
        {msg.text}
      </div>
    ))}
  </div>

  {/* Buttons */}
  <div className="flex flex-wrap gap-2">
    <button onClick={() => handleQuery("under 30000")}
      className="bg-blue-100 px-2 py-1 rounded hover:bg-blue-200">
      💰 Under ₹30K
    </button>

    <button onClick={() => handleQuery("camera")}
      className="bg-pink-100 px-2 py-1 rounded hover:bg-pink-200">
      📸 Camera
    </button>

    <button onClick={() => handleQuery("gaming")}
      className="bg-purple-100 px-2 py-1 rounded hover:bg-purple-200">
      🎮 Gaming
    </button>
  </div>
</div>
        
      )}
    </>
  );
}

export default Chatbot;