import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import HeroSection from '../components/HomeSection';
import ServicesSection from '../components/ServiceSection';
import FeaturedProducts from '../components/FeatureProduct';
import ShopByCategory from '../components/ShopCatorgry';
import Testimonials from '../components/Testimols';
import InstagramFeed from '../components/Instagram';
import Footer from '../components/Footer';



const Home = () => {
  return (
    <div className=" bg-white">
      <Navbar />
        <HeroSection />
    
        {/* Hero Section */}
        <ServicesSection />
        
        {/* Featured Categories */}
       <FeaturedProducts />
        {/* Featured Products */}

        <ShopByCategory />

        {/* Testimonials */}
       <Testimonials />

       <InstagramFeed />

       <Footer />
       
    </div>
  );
};

export default Home;