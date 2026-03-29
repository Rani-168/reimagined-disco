import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-6 text-center">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Mobile Store 📱
      </h1>

      <p className="text-gray-600 mb-6">
        Buy latest smartphones at best prices
      </p>

      {/* Button */}
      <Link to="/shop">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">
          Shop Now
        </button>
      </Link>
    </div>
  );
}

export default Home;