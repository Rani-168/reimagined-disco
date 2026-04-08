import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-sky-900 text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 lg:gap-6">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-white/10 p-2 ring-1 ring-white/10">
              <img
                src="/imglogo.png"
                alt="logo"
                className="w-12 h-12 object-cover rounded-full"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300 font-semibold mb-1">Mobile Store</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Premium Tech, Instant Access
              </h1>
            </div>
          </div>

          <div className="relative w-full lg:max-w-xl">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">🔍</span>
            <input
              type="text"
              placeholder="Search mobiles, brands, deals..."
              className="w-full rounded-full border border-white/15 bg-white/95 py-3 pl-14 pr-4 text-slate-900 shadow-lg shadow-slate-950/10 outline-none transition duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-300/40"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 rounded-full bg-white/5 border border-white/10 px-4 py-3 shadow-inner shadow-slate-950/10">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              to="/"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-100 hover:text-white hover:bg-white/10 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-100 hover:text-white hover:bg-white/10 transition duration-300"
            >
              Shop
            </Link>
            <Link
              to="/walkin"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-100 hover:text-white hover:bg-white/10 transition duration-300"
            >
              Walk-in
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/cart"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/30 transition duration-300 hover:bg-cyan-500"
            >
              🛒 Cart
              <span className="inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-full bg-white text-sm font-bold text-slate-950">
                {cart.length}
              </span>
            </Link>

            <button
              className="inline-flex items-center rounded-full bg-slate-100/15 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-slate-950/10 transition duration-300 hover:bg-white/20"
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;