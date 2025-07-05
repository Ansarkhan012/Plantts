import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ThankYouPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Your order has been placed successfully. Our team will contact you soon.
        </p>
        <Link
          to="/"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium"
        >
          Go to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
