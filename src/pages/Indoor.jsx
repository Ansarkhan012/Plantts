import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaStar, FaRegStar, FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContent';
import AOS from 'aos';
import 'aos/dist/aos.css';

const IndoorPage = () => {
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

  const indoorPlants = [
    {
      id: 101,
      name: "Peace Lily",
      price: 600,
      displayPrice: "PKR 600",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=e72936993055c1a60b0d99fa01f36eaffe30423b-5585005-images-thumbs&n=13"
    },
    {
      id: 102,
      name: "Snake Plant",
      price: 540,
      displayPrice: "PKR 540",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=dec4f4f4e09120e7ede539b05ceee011faa77622-9145889-images-thumbs&n=13"
    },
    {
      id: 103,
      name: "Aloe Vera",
      price: 360,
      displayPrice: "PKR 360",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=997d5269c6497ba334d6c51ab8c60a8951d05310-12995656-images-thumbs&n=13"
    },
    {
      id: 104,
      name: "ZZ Plant",
      price: 750,
      displayPrice: "PKR 750",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=a424a2de97345c20bd92b448a2efdb9c7247d7d7-9843420-images-thumbs&n=13"
    },
    {
      id: 105,
      name: "Monstera",
      price: 105,
      displayPrice: "PKR 105",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=97862e834cab00e4503dbd411a8121a01378dd30-10734181-images-thumbs&n=13"
    },
    {
      id: 106,
      name: "Pothos",
      price: 420,
      displayPrice: "PKR 420",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=284dd3427a6c79c5dde75657c723d9da648db797-12642203-images-thumbs&n=13"
    },
    {
      id: 107,
      name: "Fiddle Leaf Fig",
      price: 135,
      displayPrice: "PKR 135",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=1b399110239bab158e77686dab75dc8a9badc0308235419c-5869613-images-thumbs&n=13"
    },
    {
      id: 108,
      name: "Spider Plant",
      price: 480,
      displayPrice: "PKR 480",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=d91dc9cc37d83d250d7ac8853bc4c80c0543e693-10385608-images-thumbs&n=13"
    },
    {
      id: 109,
      name: "Rubber Plant",
      price: 900,
      displayPrice: "PKR 900",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=a9b84365bd62f973089d23a869cf5e790cc5e476-5381183-images-thumbs&n=13"
    },
    {
      id: 110,
      name: "Chinese Money Plant",
      price: 660,
      displayPrice: "PKR 660",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=511e4bda705cdb10e581edb7d105585926d0df76-10576886-images-thumbs&n=13"
    },
    {
      id: 111,
      name: "Philodendron",
      price: 780,
      displayPrice: "PKR 780",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=22be88e41b0befa12563126f43649ff618ab06c6-5521681-images-thumbs&n=13"
    },
    {
      id: 112,
      name: "String of Pearls",
      price: 540,
      displayPrice: "PKR 540",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=43e7d2cb280fb077accbeb808fa578e5a3ca1ba3-5220623-images-thumbs&n=13"
    },
    {
      id: 113,
      name: "Calathea",
      price: 840,
      displayPrice: "PKR 840",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=550a3a22e7f91b64aa0d10e4f2f56a4a3d00d5ef-9098836-images-thumbs&n=13"
    },
    {
      id: 114,
      name: "Bird's Nest Fern",
      price: 720,
      displayPrice: "PKR 720",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=36065e40721e6aec532a5d4ee54fcd68ef17f3ea-9853960-images-thumbs&n=13"
    },
    {
      id: 115,
      name: "Parlor Palm",
      price: 960,
      displayPrice: "PKR 960",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=e6bc2ac182e7d940a65fef28efa77514feb3b4f5-3480301-images-thumbs&n=13"
    },
    {
      id: 116,
      name: "Cast Iron Plant",
      price: 1020,
      displayPrice: "PKR 1020",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=c3275a30af37b14d8adac9b1d9af38be6c5ddafa-10414364-images-thumbs&n=13"
    },
    {
      id: 117,
      name: "Dracaena",
      price: 870,
      displayPrice: "PKR 870",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=18173fdbdd77e8b1ec1884eeae1bee10454802bc-4538573-images-thumbs&n=13"
    },
    {
      id: 118,
      name: "English Ivy",
      price: 450,
      displayPrice: "PKR 450",
      rating: 3,
      image: "https://avatars.mds.yandex.net/i?id=63ac8479ace6ec064b9a7255bb64d4da906c75d5-11402271-images-thumbs&n=13"
    },
    {
      id: 119,
      name: "Pilea",
      price: 690,
      displayPrice: "PKR 690",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=88f25a87a804ad04bdf6f7628c3c8a499fa8ae64-10521504-images-thumbs&n=13"
    },
    {
      id: 120,
      name: "Bromeliad",
      price: 810,
      displayPrice: "PKR 810",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=897ff56e1ed7f7480f9687ccb40f790d43d81b14-5347559-images-thumbs&n=13"
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12 bg-white">

        {/* Hero Section */}
        <div
          className="relative rounded-xl overflow-hidden mb-12 h-96 flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://avatars.mds.yandex.net/i?id=deba4fea4bfe3da621a76011569fcd55f276e245-9068689-images-thumbs&n=13")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          data-aos="fade-up"
        >
          <div className="text-center text-white relative z-10 p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Indoor Plants</h1>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Bring nature indoors with our beautiful and easy-to-maintain indoor plant collection.
            </p>
            <Link 
              to="/indoor-guide" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              CARE GUIDE →
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Low Light', 'Air Purifying', 'Pet Friendly', 'Succulents'].map((category) => (
              <Link 
                key={category} 
                to={`/indoor/${category.toLowerCase().replace(/ /g, '-')}`}
                className="bg-green-50 hover:bg-green-100 rounded-lg p-4 text-center transition-colors"
              >
                <h3 className="font-medium text-gray-800">{category}</h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Plants */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800">Popular Indoor Plants</h2>
            <Link to="/indoor/all" className="text-green-600 hover:underline">View All →</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {indoorPlants.map((plant, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="relative h-48 bg-green-100 overflow-hidden">
                  <img 
                    src={plant.image} 
                    alt={plant.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <button
                    onClick={() => toggleWishlist(index)}
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-green-50 transition-colors duration-300"
                  >
                    {wishlist.includes(index)
                      ? <FaHeart className="text-red-500" />
                      : <FaRegHeart className="text-gray-400 hover:text-red-500" />}
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">{plant.name}</h3>
                  <p className="text-gray-600 mb-2">Rs: {plant.price}</p>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) =>
                      i < plant.rating
                        ? <FaStar key={i} className="text-yellow-400 text-sm" />
                        : <FaRegStar key={i} className="text-gray-300 text-sm" />
                    )}
                  </div>
                  <button
                    onClick={() => addToCart({ ...plant })}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-green-50 rounded-xl p-8 md:p-12 mb-12" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Indoor Plant Care Tips</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Light Levels", desc: "Match plants with suitable lighting conditions for optimal growth and beauty." },
              { title: "Humidity Needs", desc: "Understand the humidity preferences of your plants to keep them healthy." },
              { title: "Potting & Soil", desc: "Choose the right pots and soil types to promote drainage and root health." }
            ].map((tip, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay={i * 100}>
                <h3 className="font-semibold text-lg mb-2 text-green-600">{tip.title}</h3>
                <p className="text-gray-600">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-green-600 text-white rounded-xl p-8 md:p-12" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help Styling Your Home?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Let our plant stylists help you pick the perfect greenery for every room in your house.</p>
          <Link 
            to="/consultation" 
            className="inline-block bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
          >
            BOOK A PLANT STYLIST
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndoorPage;
