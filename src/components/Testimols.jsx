import { useEffect, useState } from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      name: "Ayesha Khan",
      role: "Customer, Karachi",
      content: "Pehli baar is store se plants order kiye hain aur packaging se le kar quality tak sab kuch perfect tha! Highly recommended.",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=3ceebb12f5f7f5164747cc575133c9f41f15ddb2-5219255-images-thumbs&n=13"
    },
    {
      name: "Fatima Noor",
      role: "Customer, Lahore",
      content: "Plants ke sath milne wali care instructions ne bahut help ki. 3 months baad bhi mere sare plants bilkul fresh hain!",
      rating: 5,
      image: "https://avatars.mds.yandex.net/i?id=bd7ccb820b68deb0b3bcc6cfd5e2b57709308b58-4450973-images-thumbs&n=13"
    },
    {
      name: "Usman Ahmed",
      role: "Customer, Islamabad",
      content: "Rare plants ki variety aur timely delivery ne dil jeet liya. Packaging bhi bahut safe thi. Zaroor dobara order karungi.",
      rating: 4.5,
      image: "https://avatars.mds.yandex.net/i?id=347e48924c0d1d50c1d94ae7f909a3587d793381-5876942-images-thumbs&n=13"
    }
  ];

  const nextTestimonial = () => {
    setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setTestimonialIndex(index);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }

    return stars;
  };

  return (
    <section className="py-16 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
          Our <span className="text-green-600">Customer</span> Feedback
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          What our customer says
        </p>

        <div className="max-w-4xl mx-auto relative">
          
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition z-10"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition z-10"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-gray-700" />
          </button>

          
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-100 shadow-md">
                  <img
                    src={testimonials[testimonialIndex].image}
                    alt={testimonials[testimonialIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:w-3/4 md:pl-8">
                <div className="flex mb-3">
                  {renderStars(testimonials[testimonialIndex].rating)}
                </div>

                <blockquote className="text-gray-600 mb-6 text-lg italic leading-relaxed">
                  "{testimonials[testimonialIndex].content}"
                </blockquote>

                <div>
                  <h4 className="font-semibold text-gray-800 text-xl">
                    {testimonials[testimonialIndex].name}
                  </h4>
                  <p className="text-gray-500">
                    {testimonials[testimonialIndex].role}
                  </p>
                </div>
              </div>
            </div>

            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${testimonialIndex === index ? 'bg-green-600 w-6' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
