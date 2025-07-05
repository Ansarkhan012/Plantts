import React, { useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InstagramFeed = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const posts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1534710961216-75c88202f43e?auto=format&fit=crop&w=300&q=80', likes: '2.4k', comments: '143' },
    { id: 2, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=300&q=80', likes: '1.8k', comments: '92' },
    { id: 3, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=300&q=80', likes: '3.1k', comments: '217' },
    { id: 4, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=300&q=80', likes: '2.7k', comments: '156' },
    { id: 5, image: 'https://images.unsplash.com/photo-1526397751294-331021109fbd?auto=format&fit=crop&w=300&q=80', likes: '1.5k', comments: '84' },
    { id: 6, image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&q=80', likes: '2.9k', comments: '203' },
    { id: 7, image: 'https://avatars.mds.yandex.net/i?id=9008f503dafe1cfe829e7eb68938c97f1ab3d4a7-5031203-images-thumbs&n=13', likes: '1.2k', comments: '67' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Follow Us <span className="text-green-600">Instagram</span>
          </h2>
          <p className="text-gray-600 text-lg">@PlanttOfficial #UrbanJungle</p>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {posts.slice(0, 4).map((post, index) => (
            <div
              key={post.id}
              className="relative group overflow-hidden rounded-lg"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="flex items-center justify-center space-x-4">
                    <span className="font-bold">{post.likes}</span>
                    <span className="font-bold">{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

   
        <div className="grid grid-cols-3 gap-3 mt-3">
          {posts.slice(4).map((post, index) => (
            <div
              key={post.id}
              className="relative group overflow-hidden rounded-lg"
              data-aos="zoom-in"
              data-aos-delay={(index + 4) * 100}
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="flex items-center justify-center space-x-4">
                    <span className="font-bold">{post.likes}</span>
                    <span className="font-bold">{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

    
        <div className="text-center mt-8" data-aos="fade-up" data-aos-delay="800">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
          >
            <FaInstagram className="mr-2" />
            Follow Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
