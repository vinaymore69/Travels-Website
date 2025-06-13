import React, { useState } from 'react';
import { Users, Fuel, Gauge, Car, Shield, Zap } from 'lucide-react';


const Cars: React.FC = () => {
  
  const cars = [
    {
      name: 'Maruti Suzuki Ertiga',
      description: 'Spacious 7-seater MPV perfect for family trips',
      icon: Users,
      image: 'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/115777/ertiga-exterior-left-front-three-quarter.jpeg?isig=0&q=80',
      features: ['7 Seater Capacity', 'AC & Music System', 'Comfortable Seating'],
      specs: {
        seating: '7 Passengers',
        fuelType: 'Petrol/CNG',
        transmission: 'Manual/Automatic'
      }
    },
    {
      name: 'Maruti Suzuki Dzire',
      description: 'Compact sedan ideal for city tours and outstation trips',
      icon: Car,
      image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202411/6731b9bed079e-new-maruti-suzuki-dzire-115323411-16x9.jpg?size=948:533',
      features: ['Fuel Efficient', 'Premium Interiors', 'Smooth Drive'],
      specs: {
        seating: '4+1 Passengers',
        fuelType: 'Petrol/CNG',
        transmission: 'Manual/Automatic'
      }
    },
    {
      name: 'Maruti Suzuki WagonR',
      description: 'Tall-boy design with excellent fuel economy',
      icon: Zap,
      image: 'https://imgd-ct.aeplcdn.com/1280x720/n/cw/ec/112947/wagon-r-exterior-left-side-view.jpeg?isig=0&q=80',
      features: ['High Fuel Efficiency', 'Easy Parking', 'City Friendly'],
      specs: {
        seating: '4+1 Passengers',
        fuelType: 'Petrol/CNG',
        transmission: 'Manual/Automatic'
      }
    },
    {
      name: 'Toyota Innova Crysta',
      description: 'Premium MPV with superior comfort and reliability',
      icon: Shield,
      image: 'https://imgcdnblog.carmudi.com.ph/wp-content/uploads/2021/04/23104953/bring-home-the-joy-2021-innova-2.jpg',
      features: ['Premium Comfort', 'Spacious Interior', 'Reliable Performance'],
      specs: {
        seating: '7-8 Passengers',
        fuelType: 'Diesel/Petrol',
        transmission: 'Manual/Automatic'
      }
    }
  ];

  return (
    <section id="cars" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Our Vehicle Fleet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our well-maintained fleet of vehicles, perfect for every journey and group size
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <car.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-800 mb-2">
                  {car.name}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {car.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {car.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-500">
                      <Car className="w-3 h-3 text-gold-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Specifications */}
                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center text-gray-500">
                      <Users className="w-3 h-3 text-primary-800 mr-1" />
                      <span>Capacity:</span>
                    </div>
                    <span className="text-primary-800 font-medium">{car.specs.seating}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center text-gray-500">
                      <Fuel className="w-3 h-3 text-primary-800 mr-1" />
                      <span>Fuel:</span>
                    </div>
                    <span className="text-primary-800 font-medium">{car.specs.fuelType}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center text-gray-500">
                      <Gauge className="w-3 h-3 text-primary-800 mr-1" />
                      <span>Transmission:</span>
                    </div>
                    <span className="text-primary-800 font-medium">{car.specs.transmission}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Features */}
        <div className="mt-16 bg-gradient-to-r from-primary-800 to-gold-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose Our Fleet?
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Experience comfort and reliability with our well-maintained vehicles and professional drivers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-gold-300" />
              </div>
              <h4 className="text-xl font-bold mb-2">Safety First</h4>
              <p className="text-white/80 text-sm">All vehicles regularly serviced with safety checks</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gold-300" />
              </div>
              <h4 className="text-xl font-bold mb-2">Professional Drivers</h4>
              <p className="text-white/80 text-sm">Experienced and courteous drivers for your comfort</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Fuel className="w-8 h-8 text-gold-300" />
              </div>
              <h4 className="text-xl font-bold mb-2">Fuel Efficient</h4>
              <p className="text-white/80 text-sm">Cost-effective travel with our fuel-efficient vehicles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cars;