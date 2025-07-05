import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCart } from "../context/CartContent";
import { FiTrash2, FiShoppingBag } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8" data-aos="fade-right">
          <div className="bg-emerald-100 p-3 rounded-full">
            <FiShoppingBag className="text-emerald-600 text-xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Your Shopping Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center" data-aos="zoom-in">
            <div className="bg-emerald-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaLeaf className="text-emerald-500 text-3xl" />
            </div>
            <h2 className="text-xl font-medium text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Browse our collection to find your perfect plants</p>
            <Link
              to="/shop"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2" data-aos="fade-up">
              <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-100">
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="p-6 flex flex-col sm:flex-row gap-6"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h2 className="text-lg font-medium text-gray-800">{item.name}</h2>
                        <p className="text-lg font-medium text-gray-800">
                          Rs: {(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">{item.type}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="px-3 py-1 text-gray-500 hover:bg-gray-50"
                          >
                            -
                          </button>
                          <span className="px-3">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-gray-500 hover:bg-gray-50"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 flex items-center gap-1"
                        >
                          <FiTrash2 className="text-sm" />
                          <span className="text-sm">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="bg-white rounded-xl shadow-sm p-6 h-fit sticky top-6"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">Rs: {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>Rs: {total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => window.location.href = "/checkout"}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium mb-4"
              >
                Proceed to Checkout
              </button>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <FiShoppingBag className="text-gray-400" />
                <Link to="/shop" className="text-emerald-600 hover:underline">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
