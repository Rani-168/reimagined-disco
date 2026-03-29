import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10 rounded-2xl flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Latest Smartphones 📱
          </h1>
          <p className="mb-4">Up to 40% OFF on top brands</p>

          <Link to="/shop">
            <button className="bg-white text-black px-6 py-2 rounded-lg">
              Shop Now
            </button>
          </Link>
        </div>

        <img
          src="/banner.jpg"
          className="h-40 hidden md:block"
        />
      </div>
    </div>
  );
}

export default Home;