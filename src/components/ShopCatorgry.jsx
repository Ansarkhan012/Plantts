import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ShopByCategory = () => {
  const categories = [
    {
      name: "Outdoor Plants",
      slug: "outdoor",
      description: "Thriving plants for your garden and outdoor spaces",
      image: "https://images.unsplash.com/photo-1526397751294-331021109fbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Indoor Plants",
      slug: "indoor",
      description: "Perfect companions for your living spaces",
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Accessories",
      slug: "accessories",
      description: "Upgrade your plant care routine with essential tools",
      image: "https://avatars.mds.yandex.net/i?id=2cc1c259e7fc8d4cf9ddbdfa1a09cf9640ffec32-4470903-images-thumbs&n=13"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
    
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Shop by <span className="text-green-600">Category</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've organized our plants to help you find exactly what you need. Browse by plant type or space to discover your perfect botanical companion.
          </p>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              to={`/${category.slug}`}
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white text-sm mb-2">{category.description}</p>
                  <div className="flex items-center text-white font-medium">
                    Explore <FaArrowRight className="ml-2 text-xs" />
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                <h3 className="text-gray-800 font-semibold text-sm">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>

      
        <div className="text-center mt-12">
          <Link
            to="/categories"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            View All Categories
            <FaArrowRight className="ml-2 text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
