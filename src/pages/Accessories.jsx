import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaStar, FaRegStar, FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContent';

const AccessoriesPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleWishlist = (index) => {
    setWishlist((prev) =>
      prev.includes(index) ? prev.filter((id) => id !== index) : [...prev, index]
    );
  };

  const accessories = [
    {
      id: 301,
      name: "Ceramic Planter",
      price: 450,
      displayPrice: "PKR 450",
      rating: 4,
      image: "https://cdn-bkjpo.nitrocdn.com/FIRiXZYTjwNkQkpWjWZcWBehGaEanfsH/assets/images/optimized/rev-51b299d/etree.pk/wp-content/uploads/2024/02/Gallery-Image-White-Ceramic-Pot-or-Planter-or-Vase-in-Pakistan-5.webp"
    },
    {
      id: 302,
      name: "Watering Can",
      price: 360,
      displayPrice: "PKR 360",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=8f09b905fdbb1510d243227b19511485a6987087-12371535-images-thumbs&n=13"
    },
    {
      id: 303,
      name: "Plant Scissors",
      price: 270,
      displayPrice: "PKR 270",
      rating: 4,
      image: "https://images.squarespace-cdn.com/content/v1/550b57f0e4b03338e0474a39/1565552587954-8SOKSWB7YGAD1O6KWRQ6/pruning+shears.jpg"
    },
    {
      id: 304,
      name: "Soil Mix",
      price: 240,
      displayPrice: "PKR 240",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=f7d0a5cc29c6d156715ec0957ad9970f32ef04ed-5239137-images-thumbs&n=13"
    },
    {
      id: 305,
      name: "Grow Light",
      price: 1000,
      displayPrice: "PKR 1000",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=efc7639ac0f51b4edf5dcff9171d2d9d246bb82d-5434115-images-thumbs&n=13"
    },
    {
      id: 306,
      name: "Humidity Tray",
      price: 300,
      displayPrice: "PKR 300",
      rating: 3,
      image: "https://avatars.mds.yandex.net/i?id=b7e48335f92bca35fe755892af4c26ad0b1b8a99-9269077-images-thumbs&n=13"
    },
    {
      id: 307,
      name: "Plant Stand",
      price: 1200,
      displayPrice: "PKR 1200",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=4c3e35cbbb62b86b63bcce3909e5e5866d4a2c07-5553356-images-thumbs&n=13"
    },
    {
      id: 308,
      name: "Gardening Gloves",
      price: 350,
      displayPrice: "PKR 350",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=b46723d4ad60185d1cd9ad2a22a37f0cc87d7129-4589529-images-thumbs&n=13"
    },
    {
      id: 309,
      name: "Plant Mister",
      price: 400,
      displayPrice: "PKR 400",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=b467465d0aa895a3d975f14fe97c594d06a8b3c9-8507274-images-thumbs&n=13"
    },
    {
      id: 310,
      name: "Decorative Pebbles",
      price: 180,
      displayPrice: "PKR 180",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=fd2b1598739f1f17662936c3914df5d564a10ae6-4010583-images-thumbs&n=13"
    }
  ];
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12 bg-white">

        {/* Hero Banner */}
        <div
          className="relative rounded-xl overflow-hidden mb-12 h-96 flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://avatars.mds.yandex.net/i?id=d270cf74322436d4104c1d869ac3c86ef522a7e6-10533400-images-thumbs&n=13")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          data-aos="fade-up"
        >
          <div className="text-center text-white relative z-10 p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Plant Accessories</h1>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Upgrade your plant care routine with essential tools and decorative accessories.
            </p>
            <Link
              to="/accessory-guide"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              ACCESSORY GUIDE →
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Pots & Planters', 'Tools', 'Soil & Fertilizer', 'Grow Lights'].map((category) => (
              <Link
                key={category}
                to={`/accessories/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className="bg-green-50 hover:bg-green-100 rounded-lg p-4 text-center transition-colors"
              >
                <h3 className="font-medium text-gray-800">{category}</h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800">Popular Accessories</h2>
            <Link to="/accessories/all" className="text-green-600 hover:underline">View All →</Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {accessories.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative overflow-hidden h-60">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button
                    onClick={() => toggleWishlist(index)}
                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-green-50 transition-colors duration-300"
                  >
                    {wishlist.includes(index)
                      ? <FaHeart className="text-red-500" />
                      : <FaRegHeart className="text-gray-400 hover:text-red-500" />}
                  </button>
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) =>
                      i < item.rating
                        ? <FaStar key={i} className="text-yellow-400 text-sm" />
                        : <FaRegStar key={i} className="text-gray-300 text-sm" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
                  <p className="text-gray-600 font-medium mb-3">Rs: {item.price}</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="text-center bg-green-600 text-white rounded-xl p-8 md:p-12"
          data-aos="fade-up"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help Choosing Accessories?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Talk to our plant care experts to select the perfect tools and accessories.
          </p>
          <Link
            to="/accessories-consultation"
            className="inline-block bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
          >
            BOOK A FREE CONSULTATION
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccessoriesPage;
