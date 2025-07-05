import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPenFancy, FaCalendarAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const blogPosts = [
  {
    title: "Top 10 Indoor Plants for Beginners",
    date: "June 20, 2025",
    excerpt: "New to plants? Here are the easiest indoor plants that even beginners can grow without stress.",
    image: "https://www.glastresgreens.com/img/bg-img/blog/5-1.jpg"
  },
  {
    title: "How Plants Improve Mental Health",
    date: "May 12, 2025",
    excerpt: "Studies show that greenery reduces stress, improves mood, and boosts productivity. Learn how to bring these benefits home.",
    image: "https://www.glastresgreens.com/img/bg-img/blog/9-1.jpg"
  },
  {
    title: "Top 10 Indoor Plants for Beginners",
    date: "June 20, 2025",
    excerpt: "New to plants? Here are the easiest indoor plants that even beginners can grow without stress.",
    image: "https://www.glastresgreens.com/img/bg-img/blog/5-1.jpg"
  },
  {
    title: "Top 10 Indoor Plants for Beginners",
    date: "June 20, 2025",
    excerpt: "New to plants? Here are the easiest indoor plants that even beginners can grow without stress.",
    image: "https://www.glastresgreens.com/img/bg-img/blog/5-1.jpg"
  },
  {
    title: "Sustainable Gardening Tips",
    date: "April 28, 2025",
    excerpt: "Go green the right way! Discover sustainable gardening practices that protect nature and beautify your space.",
    image: "https://www.glastresgreens.com/img/bg-img/blog/7-1.jpg"
  }
];

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white">
      <Navbar />

      {/* Blog Header */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-green-600">Blog</span>
            </h1>
            <p className="text-xl text-gray-600">
              Insights, tips, and stories from the world of plants
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <FaCalendarAlt className="mr-2 text-green-500" />
                    {post.date}
                  </div>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-green-600 font-medium hover:underline flex items-center gap-1">
                    <FaPenFancy />
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
