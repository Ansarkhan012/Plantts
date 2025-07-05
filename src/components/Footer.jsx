import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-400">Plantt</h3>
            <p className="text-gray-300 mb-4">
              Bringing nature indoors with premium quality plants and expert care advice since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <FaPinterest className="text-xl" />
              </a>
            </div>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="/shop" className="text-gray-300 hover:text-emerald-400 transition-colors">Shop</a></li>
              <li><a href="about" className="text-gray-300 hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Plant Care</a></li>
              <li><a href="blog" className="text-gray-300 hover:text-emerald-400 transition-colors">Blog</a></li>
              <li><a href="contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

       
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-emerald-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">North Nazimabad, Karachi, Pakistan</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-emerald-400 mr-3" />
                <span className="text-gray-300">+92 313 8116796</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-emerald-400 mr-3" />
                <span className="text-gray-300">ansarkhanaptech1234@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-12">
          <h4 className="text-lg font-semibold mb-4 text-white">Join Our Green Community</h4>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white"
            />
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Get plant care tips, exclusive offers, and 10% off your first order.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Plantopia. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;