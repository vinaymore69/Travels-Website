import React from 'react';
import { MessageSquare, Star, ThumbsUp, ExternalLink, Users, Award } from 'lucide-react';

const Feedback: React.FC = () => {
  const feedbackStats = [
    {
      icon: Users,
      number: '1000+',
      label: 'Happy Customers',
      color: 'text-blue-600'
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Average Rating',
      color: 'text-yellow-500'
    },
    {
      icon: ThumbsUp,
      number: '99%',
      label: 'Satisfaction Rate',
      color: 'text-green-600'
    },
    {
      icon: Award,
      number: '52+',
      label: 'Five Star Reviews',
      color: 'text-purple-600'
    }
  ];

  const handleFeedbackClick = () => {
    window.open('https://forms.gle/TFeyYwYj9oHzbCMX7', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="feedback" className="py-20 bg-gradient-to-br from-primary-50 to-gold-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-800 to-gold-600 rounded-2xl mb-6">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Share Your Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your feedback helps us improve our services and create better travel experiences for everyone
          </p>
        </div>

        {/* Feedback Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {feedbackStats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center border border-gray-100"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary-800 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Feedback Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Top Section */}
            <div className="bg-gradient-to-r from-primary-800 to-gold-600 p-8 md:p-12 text-white text-center">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  We Value Your Opinion
                </h3>
                <p className="text-white/90 mb-8 leading-relaxed">
                  Help us serve you better by sharing your travel experience. Your honest feedback drives our commitment to excellence and helps fellow travelers make informed decisions.
                </p>
                
                {/* Feedback Button */}
                <button
                  onClick={handleFeedbackClick}
                  className="group inline-flex items-center px-8 py-4 bg-white text-primary-800 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <MessageSquare className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Give Feedback
                  <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* What to Expect */}
                <div>
                  <h4 className="text-xl font-bold text-primary-800 mb-4 flex items-center">
                    <Star className="w-5 h-5 text-gold-500 mr-2" />
                    What to Expect
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">Quick 2-3 minute feedback form</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">Rate our services and drivers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">Share suggestions for improvement</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">Help us enhance your experience</span>
                    </li>
                  </ul>
                </div>

                {/* Why Your Feedback Matters */}
                <div>
                  <h4 className="text-xl font-bold text-primary-800 mb-4 flex items-center">
                    <ThumbsUp className="w-5 h-5 text-gold-500 mr-2" />
                    Why It Matters
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">Helps us maintain high service standards</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">Guides our service improvements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">Assists future travelers in planning</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">Builds trust in our community</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                <p className="text-gray-600 mb-4">
                  Already traveled with us? We'd love to hear about your experience!
                </p>
                <button
                  onClick={handleFeedbackClick}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-800 to-gold-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Leave a Review
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Message */}
        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong className="text-primary-800">Note:</strong> Your feedback is valuable to us and helps maintain our commitment to providing exceptional travel experiences. All reviews are appreciated and considered for service enhancement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;