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
      filtered = filtered.filter((p) => p.camera === "high");
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

    setMessages([
      ...messages,
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
        <div className="fixed bottom-20 right-5 w-80 bg-white shadow-xl rounded-xl p-4">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold">🤖 Smart Assistant</h2>
            <button onClick={() => setOpen(false)}>❌</button>
          </div>

          {/* Messages */}
          <div className="h-40 overflow-y-auto mb-2 text-sm">
            {messages.map((msg, i) => (
              <p
                key={i}
                className={msg.type === "user" ? "text-right" : ""}
              >
                {msg.text}
              </p>
            ))}
          </div>

          {/* Quick Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleQuery("under 30000")}
              className="bg-gray-200 px-2 py-1 rounded"
            >
              Under ₹30K
            </button>

            <button
              onClick={() => handleQuery("best camera")}
              className="bg-gray-200 px-2 py-1 rounded"
            >
              📸 Camera
            </button>

            <button
              onClick={() => handleQuery("gaming phone")}
              className="bg-gray-200 px-2 py-1 rounded"
            >
              🎮 Gaming
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;