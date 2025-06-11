import React from 'react';
import { Shield, Users, Clock, Award, Heart, Star } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '1000+', label: 'Happy Travelers', icon: Users },
    { number: '50+', label: 'Destinations', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '100%', label: 'Safety Record', icon: Shield }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'We love what we do and it shows in every journey we craft for our guests.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Your safety is our top priority with thoroughly vetted drivers and vehicles.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service delivery.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Travel Experience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-800/60 to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-800">5+</div>
                      <div className="text-xs text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gold-600">★ 4.9</div>
                      <div className="text-xs text-gray-600">Customer Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gold-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary-800 rounded-full opacity-20"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
                About MKB Tours & Travel
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over 5 years of experience in the travel industry, MKB Tours & Travel has been creating 
                unforgettable journeys for travelers across India. Based in Mumbai, we specialize in personalized 
                travel experiences that showcase the incredible diversity and beauty of our nation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to make travel accessible, safe, and memorable for everyone. From scenic hill 
                stations to spiritual pilgrimages, cultural tours to beach getaways, we craft each journey 
                with attention to detail and genuine care for our guests.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-800 mb-6">Our Values</h3>
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-800 to-gold-500 rounded-xl flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-1">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-4">
              Trusted by Thousands
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has earned us the trust of travelers from all walks of life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-gold-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-primary-800" />
                </div>
                <div className="text-3xl font-bold text-primary-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-primary-800 mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you create memories that will last a lifetime. Get in touch today to plan your perfect getaway.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary-800 to-gold-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;