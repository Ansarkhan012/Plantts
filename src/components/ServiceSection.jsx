import React, { useEffect } from 'react';
import { FaLeaf, FaSprayCan, FaSeedling, FaTint } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      icon: <FaLeaf className="text-green-500 text-2xl" />,
      title: "Garden Care",
      description: "Professional garden maintenance and care tips to keep your plants thriving year-round."
    },
    {
      icon: <FaSprayCan className="text-green-500 text-2xl" />,
      title: "Plant Renovation",
      description: "Expert revitalization services to bring struggling plants back to full health and vibrancy."
    },
    {
      icon: <FaSeedling className="text-green-500 text-2xl" />,
      title: "Premium Seeds",
      description: "High-quality, non-GMO seeds with guaranteed germination rates for all plant varieties."
    },
    {
      icon: <FaTint className="text-green-500 text-2xl" />,
      title: "Smart Irrigation",
      description: "Custom watering solutions and automated systems for optimal plant hydration."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-green-600">Premium</span> Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive plant care solutions tailored to meet your gardening needs
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-green-100"
            >
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              <button className="mt-4 text-green-600 text-sm font-medium flex items-center justify-center mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        
        <div className="text-center mt-16" data-aos="fade-up">
          <Link
            to="/services"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
