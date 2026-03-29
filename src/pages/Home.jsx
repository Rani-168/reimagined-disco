import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6">

  <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between shadow-xl">

    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        📱 Smart Mobile Store
      </h1>

      <p className="mb-4 text-lg">
        Best Deals | Latest Phones | Fast Delivery
      </p>

      <Link to="/shop">
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:scale-105 transition">
          🚀 Shop Now
        </button>
      </Link>
    </div>

    <img
      src="/banner.jpg"
      className="h-52 mt-4 md:mt-0"
    />
  </div>
</div>
  );
}

export default Home;