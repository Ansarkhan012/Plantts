import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Contact = () => {
  return (
    <div className="bg-white">

      <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-50 to-emerald-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Get in <span className="text-green-600">Touch</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              We'd love to hear from you! Reach out for questions, suggestions, or just to say hello.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-12"
          >
            {/* Contact Form */}
            <motion.div variants={fadeInUp} className="lg:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                      placeholder="Tell us about your plant needs..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="lg:w-1/2">
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-3 rounded-full mr-4">
                        <FaPhone className="text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Phone</h3>
                        <p className="text-gray-600">+92 313 8116796</p>
                        <p className="text-gray-600">Mon-Fri: 9am-6pm EST</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-3 rounded-full mr-4">
                        <FaEnvelope className="text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Email</h3>
                        <p className="text-gray-600">ansarkhanaptech1234@gmail.com</p>
                        <p className="text-gray-600">Support: ansarkhanpk007@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-3 rounded-full mr-4">
                        <FaMapMarkerAlt className="text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Our Store</h3>
                        <p className="text-gray-600">North Nazimabad</p>
                        <p className="text-gray-600">Karachi, Pakistan</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-3 rounded-full mr-4">
                        <FiClock className="text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Hours</h3>
                        <p className="text-gray-600">Monday-Friday: 9am-7pm</p>
                        <p className="text-gray-600">Saturday: 10am-5pm</p>
                        <p className="text-gray-600">Sunday: 12pm-5pm</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl">
  <div className="relative h-64 bg-gray-50 flex items-center justify-center overflow-hidden">
    {/* Map placeholder with better styling */}
    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
      <div className="text-center p-6">
        <div className="mx-auto mb-4 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-emerald-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
            />
          </svg>
        </div>
        <p className="text-gray-600 font-medium">Our Store Location</p>
        <p className="text-sm text-gray-500 mt-1">North Nazimabad, Karachi City</p>
      </div>
    </div>
    
    {/* Watermark overlay */}
    <div className="absolute inset-0 flex items-center justify-center opacity-10">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-32 w-32 text-emerald-300" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={1} 
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" 
        />
      </svg>
    </div>
  </div>
  
  <div className="p-4 border-t border-gray-100 text-center">
    <button className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors group">
      Get Directions
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M14 5l7 7m0 0l-7 7m7-7H3" 
        />
      </svg>
    </button>
  </div>
</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked <span className="text-green-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common inquiries
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What's your return policy?",
                answer: "We accept returns within 30 days of purchase for store credit. Plants must be in healthy condition with original receipt."
              },
              {
                question: "How often should I water my plants?",
                answer: "It varies by plant type, but a good rule is to check soil moisture weekly. Most houseplants prefer soil to dry slightly between waterings."
              },
              {
                question: "Do you offer plant care workshops?",
                answer: "Yes! We host monthly workshops on various plant care topics. Check our events page for upcoming sessions."
              },
              {
                question: "Can you help identify a plant I have?",
                answer: "Absolutely! Bring a photo or sample to our store, or email us clear pictures at plantid@plantt.com."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <details className="group">
                  <summary className="list-none p-6 cursor-pointer flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    <div className="w-5 h-5 text-green-600 transform group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;