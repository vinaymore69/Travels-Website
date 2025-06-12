import React from 'react';
import { FileText, AlertCircle, Clock, Car, CreditCard, MapPin, Fuel, Mountain } from 'lucide-react';

const Terms: React.FC = () => {
  const termsData = [
    {
      icon: MapPin,
      title: 'Kilometre & Hour Limits',
      description: 'Your trip has a kilometre limit and in case of certain special packages may even contain hour limit. If your usage exceeds these limits, you will be charged for the excess kilometre use and/or hour as applicable.'
    },
    {
      icon: Car,
      title: 'Airport Entry Charges',
      description: 'The airport entry charge, if applicable, is not included in the fare and will be charged extra.'
    },
    {
      icon: CreditCard,
      title: 'Additional Charges',
      description: 'All road toll, parking charges, state taxes, etc. are charged extra and need to be paid to the concerned authorities as per actuals.'
    },
    {
      icon: Clock,
      title: 'Night Allowance',
      description: 'For driving between 9:45 PM to 6:00 AM on any day, an additional night allowance will be applicable and is to be paid to the driver.'
    },
    {
      icon: FileText,
      title: 'Itinerary Planning',
      description: 'Please ensure you have covered all cities you plan to visit in your itinerary. This will help our driver prepare accordingly. Adding cities to the itinerary during the trip may not be possible.'
    },
    {
      icon: Mountain,
      title: 'Hill Station Travel',
      description: 'If your trip has hill climbs, cab AC may be switched off during such climbs for vehicle safety and performance.'
    },
    {
      icon: Fuel,
      title: 'CNG Vehicles',
      description: 'We promote cleaner fuel and thus your cab can be a CNG vehicle. The driver may need to refuel CNG once or more during your trip. Please cooperate with the driver.'
    },
    {
      icon: MapPin,
      title: 'Pick-up & Drop Policy',
      description: 'Your trip includes one pick-up in pick-up city and one drop to destination city. It does not include within-city travel.'
    }
  ];

  return (
    <section id="terms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-800 to-gold-500 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Terms & Conditions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Please read our terms and conditions carefully for outstation one-way and round-trip services
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 p-6 rounded-lg mb-12">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Important Notice</h3>
              <p className="text-amber-700">
                <strong>Kindly note that 5% GST is applicable for GST bill.</strong> All terms and conditions mentioned below are applicable for our outstation services including one-way and round-trip packages.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {termsData.map((term, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-100 to-gold-100 rounded-xl flex items-center justify-center">
                  <term.icon className="w-6 h-6 text-primary-800" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary-800 mb-3">
                    {term.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {term.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Types */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-800 text-center mb-8">
            Service Coverage
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-gold-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-800 to-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-primary-800 mb-3">One-Way Trips</h4>
              <p className="text-gray-600">
                Perfect for single destination travel with flexible pickup and drop-off locations across India.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-gold-50 to-primary-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-primary-800 mb-3">Round Trips</h4>
              <p className="text-gray-600">
                Complete return journeys with multiple destination coverage and flexible itinerary options.
              </p>
            </div>
          </div>
        </div>

        {/* Contact for Clarifications */}
        <div className="bg-gradient-to-r from-primary-800 to-gold-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need Clarification?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            If you have any questions about our terms and conditions or need clarification on any point, 
            please don't hesitate to contact us before booking your trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918433894555"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>📞 +91 84338 94555</span>
            </a>
            <a
              href="mailto:Shreemkb@gmail.com"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>✉️ Shreemkb@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Back to Services */}
        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary-800 to-gold-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Back to Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Terms;