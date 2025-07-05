import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Consultation = () => {
  return (
    <div>
        <Navbar />
    <section className="min-h-screen py-16 px-4 bg-gray-50" >
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Book a Plant Consultation
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Get expert guidance for your home garden or plant care needs. Fill out the form below to schedule a session.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="03xx-xxxxxxx"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="date">Preferred Date</label>
            <input
              type="date"
              id="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="message">Additional Notes</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Tell us more about your plant needs"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            Book Consultation
          </button>
        </form>
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default Consultation;
