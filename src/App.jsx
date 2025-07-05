import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Indoor from './pages/Indoor';
import Shop from './pages/Shop';
import LoginPage from './pages/Login';
import OutdoorPage from './pages/Outdoor';
import CartPage from './pages/Cart';
import AccessoriesPage from './pages/Accessories';
import CheckoutPage from './pages/CheckoutPage';
import ThankYouPage from './pages/ThankYou';
import Consultation from './pages/Consultation'; // Fixed import
import NotFoundPage from './pages/NoPageFound';
import ScrollToTopButton from './components/ScrollToTop';
import ScrollToTop from './components/Scroll';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/indoor" element={<Indoor />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/outdoor" element={<OutdoorPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />

        
        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
      
    </Router>
  );
}

export default App;