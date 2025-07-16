import React from 'react';
import { Download, FileText, Star, Gift } from 'lucide-react';

const BookletDownload: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/MKB Tours And Travels Booklet.pdf';
    link.download = 'MKB Tours And Travels Booklet.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const bookletFeatures = [
    'Complete destination guide',
    'Detailed pricing information',
    'Package comparisons',
    'Travel tips and recommendations',
    'Contact information',
    'Terms and conditions'
  ];

  return (
    <section id="booklet" className="py-20 bg-gradient-to-br from-primary-50 to-gold-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-800 to-gold-600 rounded-2xl mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Download Our Travel Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get our comprehensive travel booklet with detailed information about destinations, packages, and pricing
          </p>
        </div>

        {/* Main Download Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Top Section */}
            <div className="bg-gradient-to-r from-primary-800 to-gold-600 p-8 md:p-12 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-6 md:mb-0">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <Gift className="w-8 h-8 text-gold-300 mr-3" />
                    <span className="bg-gold-400 text-primary-800 px-3 py-1 rounded-full text-sm font-bold">
                      FREE DOWNLOAD
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    MKB Tours & Travel Booklet
                  </h3>
                  <p className="text-white/90 text-lg">
                    Everything you need to plan your perfect journey
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <button
                    onClick={handleDownload}
                    className="group bg-white text-primary-800 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3"
                  >
                    <Download className="w-6 h-6 group-hover:animate-bounce" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* What's Inside */}
                <div>
                  <h4 className="text-xl font-bold text-primary-800 mb-6 flex items-center">
                    <FileText className="w-5 h-5 text-gold-500 mr-2" />
                    What's Inside
                  </h4>
                  <ul className="space-y-3">
                    {bookletFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-xl font-bold text-primary-800 mb-6 flex items-center">
                    <Star className="w-5 h-5 text-gold-500 mr-2" />
                    Why Download?
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-3">
                        <span className="text-primary-800 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-primary-800 mb-1">Plan Offline</h5>
                        <p className="text-gray-600 text-sm">Access all information without internet connection</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-3">
                        <span className="text-primary-800 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-primary-800 mb-1">Compare Packages</h5>
                        <p className="text-gray-600 text-sm">Detailed comparison of all available options</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-3">
                        <span className="text-primary-800 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-primary-800 mb-1">Share with Family</h5>
                        <p className="text-gray-600 text-sm">Easy to share with family and friends for planning</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                <p className="text-gray-600 mb-6">
                  Ready to start planning your next adventure? Download our comprehensive travel guide now!
                </p>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-800 to-gold-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-3" />
                  Get Your Free Copy
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong className="text-primary-800">Note:</strong> Our travel booklet is regularly updated with the latest destinations, pricing, and packages. For the most current information, please contact us directly or download the latest version.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookletDownload;