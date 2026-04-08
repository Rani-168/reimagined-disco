import { useState } from "react";
import products from "../data/products";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleQuery = (queryText) => {
    if (!queryText) return;

    const query = queryText.toLowerCase();
    let filtered = products;

    if (query.includes("30000")) {
      filtered = filtered.filter((p) => p.price <= 30000);
    }

    if (query.includes("camera")) {
      filtered = filtered.filter((p) => p.camera >= 50);
    }

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
      { type: "bot", text: botText },
    ]);
    setQuery("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-3xl text-white shadow-2xl shadow-cyan-500/30 transition-transform duration-300 hover:-translate-y-1"
      >
        💬
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-40 w-80 rounded-[32px] border border-slate-200 bg-white/95 shadow-2xl backdrop-blur-xl ring-1 ring-slate-200">
          <div className="rounded-t-[32px] bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-4 text-white shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-100/80">AI Assistant</p>
                <h2 className="text-lg font-semibold">Smart help for shopping</h2>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full bg-white/15 p-2 text-white transition hover:bg-white/25"
              >
                ❌
              </button>
            </div>
          </div>

          <div className="p-4">
            <div className="max-h-56 space-y-3 overflow-y-auto pr-1 text-sm">
              {messages.length === 0 ? (
                <div className="rounded-3xl bg-slate-100 p-4 text-slate-600">
                  Ask me about phones, price, camera or gaming.
                </div>
              ) : (
                messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`rounded-3xl p-3 text-sm leading-relaxed ${
                      msg.type === "user"
                        ? "ml-auto max-w-[78%] bg-blue-500 text-white"
                        : "bg-slate-100 text-slate-800"
                    }`}
                  >
                    {msg.text.split("\n").map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                ))
              )}
            </div>

            <div className="mt-4 grid gap-3">
              <div className="grid grid-cols-[1fr_auto] gap-2">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a question..."
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition duration-300 focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                />
                <button
                  onClick={() => handleQuery(query)}
                  className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-200/50 transition hover:opacity-90"
                >
                  Send
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleQuery("under 30000")}
                  className="rounded-2xl bg-blue-100 px-3 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-200"
                >
                  💰 Under ₹30K
                </button>
                <button
                  onClick={() => handleQuery("camera")}
                  className="rounded-2xl bg-pink-100 px-3 py-2 text-xs font-semibold text-pink-700 transition hover:bg-pink-200"
                >
                  📸 Camera
                </button>
                <button
                  onClick={() => handleQuery("gaming")}
                  className="rounded-2xl bg-violet-100 px-3 py-2 text-xs font-semibold text-violet-700 transition hover:bg-violet-200"
                >
                  🎮 Gaming
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;