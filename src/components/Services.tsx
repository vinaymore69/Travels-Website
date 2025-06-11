import React from 'react';
import { Car, Route, Users, Headphones, MapPin, Clock, Shield, Star } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Car,
      title: 'Pickup & Drop',
      description: 'Convenient door-to-door transportation services with professional drivers and comfortable vehicles.',
      features: ['Professional Drivers', 'Clean Vehicles', 'On-Time Service']
    },
    {
      icon: Route,
      title: 'Customized Itineraries',
      description: 'Personalized travel plans tailored to your preferences, budget, and timeline.',
      features: ['Flexible Planning', 'Budget-Friendly', 'Personal Preferences']
    },
    {
      icon: Users,
      title: 'Group Tours',
      description: 'Exciting group adventures with like-minded travelers exploring amazing destinations together.',
      features: ['Small Groups', 'Experienced Guides', 'Shared Memories']
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock assistance to ensure your journey is smooth and worry-free.',
      features: ['Emergency Support', 'Travel Assistance', 'Quick Response']
    }
  ];

  const additionalServices = [
    { icon: MapPin, title: 'Local Guides', description: 'Expert local guides for authentic experiences' },
    { icon: Clock, title: 'Flexible Timing', description: 'Travel at your own pace and schedule' },
    { icon: Shield, title: 'Travel Insurance', description: 'Comprehensive coverage for peace of mind' },
    { icon: Star, title: 'Premium Service', description: 'Luxury options for enhanced comfort' }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience hassle-free travel with our comprehensive range of services designed to make your journey unforgettable
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-800 to-gold-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-primary-800 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-800 text-center mb-8">
            Additional Benefits
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-100 to-gold-100 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary-800" />
                </div>
                <h4 className="font-semibold text-primary-800 mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary-800 to-gold-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;