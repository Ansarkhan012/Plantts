import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaLeaf, FaSeedling, FaSprayCan, FaArrowRight } from 'react-icons/fa';


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Products from '../components/Products';

const Shop = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const categories = [
    {
      name: 'Indoor Plants',
      slug: 'indoor',
      description: 'Bring nature inside with our air-purifying collection',
      icon: <FaLeaf className="text-emerald-500 text-3xl" />,
      image: 'https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bgColor: 'bg-emerald-50'
    },
    {
      name: 'Outdoor Plants',
      slug: 'outdoor',
      description: 'Transform your garden with our premium selection',
      icon: <FaSeedling className="text-green-600 text-3xl" />,
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Plant Care',
      slug: 'accessories',
      description: 'Everything to help your plants thrive',
      icon: <FaSprayCan className="text-teal-500 text-3xl" />,
      image: 'https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bgColor: 'bg-teal-50'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
     

<section
  className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: `url('https://avatars.mds.yandex.net/i?id=4ee347c6aef1a8a3f44a27bf5a9dadb90938b740-9222386-images-thumbs&n=13')`,
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-black/50 z-0"></div>

  {/* Bottom Fade */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>

  {/* Content */}
  <div
    className="relative z-20 text-center text-white px-4 max-w-2xl"
    data-aos="fade-up"
  >
    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-md">
      Shop Nature’s Best Picks
    </h1>
    <p className="text-lg md:text-xl mb-6 text-white/90">
      Discover a curated collection of plants, pots, and accessories to style your space and nourish your green thumb.
    </p>

    {/* Search Bar */}
    <div className="flex items-center justify-center max-w-md mx-auto bg-white rounded-full overflow-hidden shadow-xl border border-gray-200">
      <input
        type="text"
        placeholder="Search for plants, pots, accessories..."
        className="w-full px-4 py-2 text-gray-700 focus:outline-none"
      />
      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 transition-colors duration-300">
        <FiSearch />
      </button>
    </div>
  </div>
</section>



      {/* Transform Your Space Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div data-aos="fade-up" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Transform Your Space</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Create Your Indoor Oasis</h3>
              <p className="text-gray-600 mb-6">
                Our carefully curated selection of houseplants will help you create a healthier, more beautiful living environment. 
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Air Purifying', 'Low Maintenance', 'Pet Friendly', 'Trending'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="bg-emerald-100 p-2 rounded-full">
                      <FaLeaf className="text-emerald-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/indoor-plants" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
                Explore Indoor Plants <FaArrowRight className="ml-2" />
              </Link>
            </div>
            <div data-aos="zoom-in" className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://media.istockphoto.com/id/1310297075/photo/green-living-room-with-vertical-garden-house-plants-beige-color-sofa-and-parquet-floor.jpg?s=612x612&w=0&k=20&c=OJMCp9pwiDUYtXrHK3HsjYNXz4cJNhtIjQg-FyQ7boQ="
                alt="Beautiful indoor plants"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto bg-white">
        <div data-aos="fade-up" className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections designed for every plant lover
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.slug}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group"
            >
              <Link to={`/${category.slug}`} className="block h-full">
                <div className={`${category.bgColor} rounded-2xl p-6 mb-4 h-64 flex items-center justify-center overflow-hidden relative group-hover:shadow-md transition-all`}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute w-full h-full object-cover opacity-70 group-hover:opacity-80 transition-opacity duration-300"
                  />
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 max-w-7xl mx-auto bg-gray-50">
        
        <Products />
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div data-aos="zoom-in" className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our plant experts are ready to help you find the perfect green companion
          </p>
          <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium shadow-lg">
            Get Personalized Recommendations
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
