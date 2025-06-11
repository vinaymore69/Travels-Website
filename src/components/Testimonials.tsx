import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'Exceptional service! MKB Tours made our family trip to Goa absolutely perfect. The driver was professional, the vehicle was clean, and they took care of every detail. Highly recommended!',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Priya Patel',
      location: 'Pune',
      rating: 5,
      text: 'Our pilgrimage tour to Shirdi was beautifully organized. The team was respectful of our religious needs and ensured we had a peaceful, spiritual journey. Thank you MKB Tours!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Amit Desai',
      location: 'Nashik',
      rating: 5,
      text: 'The Lonavala weekend package was fantastic! Great value for money, comfortable accommodation, and wonderful sightseeing arrangements. Will definitely book again.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Sunita Joshi',
      location: 'Thane',
      rating: 5,
      text: 'Professional, punctual, and pleasant! Our group tour to Mahabaleshwar was handled perfectly. The driver was knowledgeable about local attractions and very helpful.',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Vikram Singh',
      location: 'Mumbai',
      rating: 5,
      text: 'Excellent coordination and customer service. From booking to drop-off, everything was seamless. MKB Tours has earned a loyal customer. Five stars!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-primary-800 to-gold-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our happy customers who have experienced memorable journeys with us
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-center justify-center mb-8">
              <Quote className="w-12 h-12 text-gold-500" />
            </div>

            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-gold-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-gold-200"
                />
                <div className="text-left">
                  <h4 className="font-bold text-primary-800 text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gold-400 scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-gold-300 fill-current" />
            <span className="text-white font-semibold">4.9/5 Average Rating</span>
            <span className="text-white/80">• 200+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;