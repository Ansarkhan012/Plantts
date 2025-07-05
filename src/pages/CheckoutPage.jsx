import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CheckoutPage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can also validate the form here
    navigate("/thankyou");
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-12 bg-white shadow-md rounded-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md"
            required
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={form.postalCode}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700"
          >
            Place Order
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
