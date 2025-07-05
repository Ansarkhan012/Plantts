import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Decorative Leaf SVG in background */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none opacity-10">
        <img
          src="https://www.svgrepo.com/show/309014/leaf.svg"
          alt="Decorative Leaves"
          className="w-full max-h-96 object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-xl shadow-lg text-center border border-green-100 relative z-10" data-aos="fade-up">
        
        {/* Leaf Icon */}
        <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 3c-4.97 0-9 4.03-9 9 0 4.48 3.29 8.22 7.61 8.91a8.97 8.97 0 004.67-1.25c3.53-2.09 5.72-6.18 5.72-10.66 0-1.7-.39-3.3-1.08-4.71C18.12 3.95 15.21 3 12 3z"
            />
          </svg>
        </div>

        <h1 className="mt-6 text-3xl font-extrabold text-green-700 sm:text-4xl" data-aos="fade-up" data-aos-delay="300">
          404 - Page Not Found
        </h1>

        <p className="mt-4 text-lg text-gray-600" data-aos="fade-up" data-aos-delay="400">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-10" data-aos="fade-up" data-aos-delay="500">
          <Link
            to="/"
            className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 transition-colors duration-300"
          >
            Return to Home
          </Link>
        </div>

        <div className="mt-6" data-aos="fade-up" data-aos-delay="600">
          <p className="text-sm text-gray-500">
            Need help?{' '}
            <Link to="/contact" className="font-medium text-green-600 hover:text-green-500">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
