import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar, FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContent';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  const outdoorPlants = [
    {
      id: 201,
      name: "Rose Bush",
      price: 720,
      displayPrice: "PKR 720",
      rating: 5,
      image: "https://cdn.pixabay.com/photo/2018/01/29/07/11/flower-3115353_640.jpg"
    },
    {
      id: 202,
      name: "Lavender",
      price: 540,
      displayPrice: "PKR 540",
      rating: 4,
      image: "https://fairweathers.co.uk/wp-content/uploads/2015/02/a.-Havana-RL0746-scaled.jpg"
    },
    {
      id: 203,
      name: "Boxwood Hedge",
      price: 840,
      displayPrice: "PKR 840",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=0d387984946b77b02e5c1c4325e080cdc0ec5532-8474442-images-thumbs&n=13"
    },
    {
      id: 204,
      name: "Japanese Maple",
      price: 1350,
      displayPrice: "PKR 1350",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=f1b424d7b39db3a58886b94557ad2f8d93c69e02-2361471-images-thumbs&n=13"
    },
    {
      id: 205,
      name: "Hydrangea",
      price: 660,
      displayPrice: "PKR 660",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=2185cc896386da13e6f8ba03e847534054d335cd-5213641-images-thumbs&n=13"
    },
    {
      id: 206,
      name: "Olive Tree",
      price: 1650,
      displayPrice: "PKR 1650",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=524af898a0032045fb8fdd98cb261c362a8376e4-4593014-images-thumbs&n=13"
    },
    {
      id: 207,
      name: "Boxwood Topiary",
      price: 1950,
      displayPrice: "PKR 1950",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=b1145186301a5df172f17b86ec98ce173eed02bb-5220441-images-thumbs&n=13"
    },
    {
      id: 208,
      name: "Lemon Tree",
      price: 1470,
      displayPrice: "PKR 1470",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=f4cf05ccfb48047de219be79b13dcce78c6606fa21b93d27-11407033-images-thumbs&n=13"
    },
    {
      id: 209,
      name: "Bamboo Plant",
      price: 450,
      displayPrice: "PKR 450",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=c2f2c8eebe374fe71651fbbdb2181d1ba6bccebf-5037427-images-thumbs&n=13"
    },
    {
      id: 210,
      name: "Jasmine Vine",
      price: 320,
      displayPrice: "PKR 320",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=97fc8a7ec6823309dbe0b690d4bb8f9fc989fcd5-9181123-images-thumbs&n=13"
    },
    {
      id: 211,
      name: "Cypress Tree",
      price: 1250,
      displayPrice: "PKR 1250",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=833ebe16ac09a5ccafd6e3753ec311de22d857b9-4554870-images-thumbs&n=13"
    },
    {
      id: 212,
      name: "Geranium",
      price: 800,
      displayPrice: "PKR 800",
      rating: 3,
      image: "https://avatars.mds.yandex.net/i?id=f7c2ad21fc8f3368948c630ee0173e42abb187a6-3193964-images-thumbs&n=13"
    },
    {
      id: 213,
      name: "Magnolia Tree",
      price: 189,
      displayPrice: "PKR 189",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=b85ae14fa0b8117750d83788891d6db7-5381133-images-thumbs&n=13"
    },
    {
      id: 214,
      name: "Hibiscus",
      price: 150,
      displayPrice: "PKR 150",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=d3feab31bbdda27eb352b905fd7e3e74409b11d1-7051792-images-thumbs&n=13"
    },
    {
      id: 215,
      name: "Azalea Bush",
      price: 380,
      displayPrice: "PKR 380",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=ed43a1a36af19178c9759e6d5a50ae08-4230863-images-thumbs&n=13"
    },
    {
      id: 216,
      name: "Palm Tree",
      price: 225,
      displayPrice: "PKR 225",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=2261eecab3e9ff3eba6bf9874a62565345d0f734-7752085-images-thumbs&n=13"
    },
    {
      id: 217,
      name: "Peony",
      price: 280,
      displayPrice: "PKR 280",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=999fcb29a019e2f3f9ca579b696cc35d653e4b6e-8173266-images-thumbs&n=13"
    },
    {
      id: 218,
      name: "Cherry Blossom",
      price: 175,
      displayPrice: "PKR 175",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=543c53ec3a8068731a2d091db46c8060333f2f19-12890380-images-thumbs&n=13"
    },
    {
      id: 219,
      name: "Sunflower",
      price: 900,
      displayPrice: "PKR 900",
      rating: 3,
      image: "https://cdn.pixabay.com/photo/2018/01/28/11/24/sunflower-3113318_640.jpg"
    },
    {
      id: 220,
      name: "Bougainvillea",
      price: 420,
      displayPrice: "PKR 420",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=6adbc3d4c1bf46158d7da99b0315cd79d7601a6c-10927571-images-thumbs&n=13"
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
            {outdoorPlants.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 50}
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
        <div className="text-center bg-green-600 text-white rounded-xl p-8 md:p-12" data-aos="fade-up">
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
