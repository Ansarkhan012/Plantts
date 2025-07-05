import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { FaLeaf, FaHeart, FaGlobeAmericas, FaUserFriends } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-50 to-emerald-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-green-600">Story</span>
            </h1>
            <p className="text-xl text-gray-600">
              How we grew from a small plant shop to your favorite green destination
            </p>
          </div>
        </div>
      </section>

      {/* Our Beginnings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2" data-aos="fade-up">
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://www.glastresgreens.com/img/bg-img/blog/11-1.jpg"
                  alt="Our shop"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-4 text-gray-600" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our <span className="text-green-600">Beginnings</span>
              </h2>
              <p>
                Plantt started in 2015 as a small family-owned plant shop in the heart of the city.
              </p>
              <p>
                Our founder, Sarah Green, has always believed that plants have the power to transform spaces and lives.
              </p>
              <p>
                Today, we're proud to serve thousands of happy customers both in-store and online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto" data-aos="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our <span className="text-green-600">Mission</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                To connect people with nature through beautiful, healthy plants
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaLeaf className="text-3xl text-green-600" />,
                  title: "Quality Plants",
                  description: "We source only the healthiest plants from trusted growers."
                },
                {
                  icon: <FaHeart className="text-3xl text-green-600" />,
                  title: "Expert Advice",
                  description: "Our plant specialists provide personalized care guidance."
                },
                {
                  icon: <FaGlobeAmericas className="text-3xl text-green-600" />,
                  title: "Eco-Conscious",
                  description: "We use biodegradable packaging and carbon-neutral shipping."
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto" data-aos="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center mb-4">
                <FaUserFriends className="text-green-600 text-2xl mr-2" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Meet Our <span className="text-green-600">Team</span>
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The passionate people behind Plantt's success
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Green",
                  role: "Founder & CEO",
                  bio: "Plant enthusiast with 15+ years of horticulture experience",
                  initials: "SG"
                },
                {
                  name: "Michael Chen",
                  role: "Plant Specialist",
                  bio: "Botany expert focused on rare species cultivation",
                  initials: "MC"
                },
                {
                  name: "Emma Rodriguez",
                  role: "Customer Care",
                  bio: "Dedicated to creating exceptional plant shopping experiences",
                  initials: "ER"
                }
              ].map((person, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <div className="bg-green-100 h-40 flex items-center justify-center">
                    <span className="text-4xl font-bold text-green-800">{person.initials}</span>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{person.name}</h3>
                    <p className="text-green-600 font-medium mb-3">{person.role}</p>
                    <p className="text-gray-600 text-sm">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to <span className="text-green-600">greenify</span> your space?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our collection of premium plants and accessories
          </p>
          <Link
            to="/shop"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
