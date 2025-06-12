import React from 'react';
import { Car, Route, Users, Headphones, MapPin, Clock, Shield, Star, Plane, Eye } from 'lucide-react';

const Services: React.FC = () => {
  const mainServices = [
    {
      icon: Car,
      title: 'Local Rental with Driver',
      description: 'Professional chauffeur services for local travel within the city with experienced drivers.',
      features: ['Experienced Drivers', 'Hourly/Daily Rates', 'City Navigation']
    },
    {
      icon: Plane,
      title: 'Airport Transfer',
      description: 'Reliable pickup and drop services to and from airports with flight tracking.',
      features: ['Flight Tracking', 'Meet & Greet', 'Luggage Assistance']
    },
    {
      icon: Route,
      title: 'Outstation Travel',
      description: 'Comfortable long-distance travel to destinations across India with flexible packages.',
      features: ['One Way & Round Trip', 'Multi-City Tours', 'Flexible Itinerary']
    },
    {
      icon: Eye,
      title: 'Mumbai Darshan',
      description: 'Complete sightseeing tours of Mumbai covering all major attractions and landmarks.',
      features: ['Famous Landmarks', 'Local Guide', 'Photo Stops']
    }
  ];

  const additionalServices = [
    { icon: MapPin, title: 'Local Guides', description: 'Expert local guides for authentic experiences' },
    { icon: Clock, title: 'Flexible Timing', description: 'Travel at your own pace and schedule' },
    { icon: Shield, title: 'Travel Insurance', description: 'Comprehensive coverage for peace of mind' },
    { icon: Star, title: 'Premium Service', description: 'Luxury options for enhanced comfort' }
  ];

  const scrollToTerms = () => {
    const element = document.getElementById('terms');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          {mainServices.map((service, index) => (
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

        {/* Service Details */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-800 text-center mb-8">
            Service Highlights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Car className="w-4 h-4 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-800 mb-1">Local Rental</h4>
                  <p className="text-gray-600 text-sm">Perfect for city exploration, shopping trips, and local business meetings with professional drivers.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Plane className="w-4 h-4 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-800 mb-1">Airport Transfer</h4>
                  <p className="text-gray-600 text-sm">Stress-free airport pickups and drops with flight monitoring and meet & greet services.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Route className="w-4 h-4 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-800 mb-1">Outstation Travel</h4>
                  <p className="text-gray-600 text-sm">Comfortable long-distance journeys with flexible one-way and round-trip options.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-4 h-4 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-800 mb-1">Mumbai Darshan</h4>
                  <p className="text-gray-600 text-sm">Complete Mumbai city tours covering Gateway of India, Marine Drive, and all major attractions.</p>
                </div>
              </div>
            </div>
          </div>
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

        {/* Terms & Conditions Link */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary-800 to-gold-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Custom Quote
            </button>
            <button
              onClick={scrollToTerms}
              className="bg-white border-2 border-primary-800 text-primary-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-800 hover:text-white transition-all duration-300"
            >
              View Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;