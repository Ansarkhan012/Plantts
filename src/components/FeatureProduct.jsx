import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar, FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useCart } from '../context/CartContent';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeaturedProducts = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [wishlist, setWishlist] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const products = [
    {
      id: 301,
      name: "Ceramic Planter",
      price: 450,
      category: 'new',
      displayPrice: "PKR 450",
      rating: 4,
      image: "https://cdn-bkjpo.nitrocdn.com/FIRiXZYTjwNkQkpWjWZcWBehGaEanfsH/assets/images/optimized/rev-51b299d/etree.pk/wp-content/uploads/2024/02/Gallery-Image-White-Ceramic-Pot-or-Planter-or-Vase-in-Pakistan-5.webp"
    },
    {
      id: 302,
      name: "Watering Can",
      price: 360,
      category: 'all',
      displayPrice: "PKR 360",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=8f09b905fdbb1510d243227b19511485a6987087-12371535-images-thumbs&n=13"
    },
    {
      id: 303,
      name: "Plant Scissors",
      price: 270,
      category: 'new',
      displayPrice: "PKR 270",
      rating: 4,
      image: "https://images.squarespace-cdn.com/content/v1/550b57f0e4b03338e0474a39/1565552587954-8SOKSWB7YGAD1O6KWRQ6/pruning+shears.jpg"
    },
    {
      id: 109,
      name: "Rubber Plant",
      price: 900,
      originalPrice: 550,
      category: 'sale',
      displayPrice: "PKR 900",
      rating: 4,
      image: "https://avatars.mds.yandex.net/i?id=a9b84365bd62f973089d23a869cf5e790cc5e476-5381183-images-thumbs&n=13"
    },
  ];

  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(product => product.category === activeFilter);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured <span className="text-green-600">Plants</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our best indoor plants that improve air quality, add nature's touch, and brighten your interior.
          </p>
        </div>

        
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
          {['all', 'new', 'sale'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:text-green-600 hover:bg-green-50 border border-gray-200'
              }`}
            >
              {filter === 'all' && 'All Plants'}
              {filter === 'new' && 'New Arrivals'}
              {filter === 'sale' && 'On Sale'}
            </button>
          ))}
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, i) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              
              <div className="relative overflow-hidden h-60">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.category === 'sale' && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    SALE
                  </div>
                )}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-green-50 transition-colors duration-300"
                >
                  {wishlist.includes(product.id)
                    ? <FaHeart className="text-red-500" />
                    : <FaRegHeart className="text-gray-400 hover:text-red-500" />}
                </button>
              </div>

              
              <div className="p-5">
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) =>
                    i < product.rating
                      ? <FaStar key={i} className="text-yellow-400 text-sm" />
                      : <FaRegStar key={i} className="text-gray-300 text-sm" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-green-600 font-bold">Rs: {product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 text-sm line-through">Rs: {product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        
        <div className="text-center mt-12" data-aos="fade-up">
          <Link
            to="/shop"
            className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
