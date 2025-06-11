import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 84338 94555', '+91 86899 23413'],
      action: 'tel:+918433894555'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['Shreemkb@gmail.com'],
      action: 'mailto:Shreemkb@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Anusaya Niwas, Malpa Dongri No. 3', 'Andheri East, Mumbai 400093'],
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sun: 24/7', 'Emergency Support Available'],
      action: null
    }
  ];

  const destinations = [
    'Karjat', 'Lonavala', 'Mahabaleshwar', 'All Gujarat', 'All Goa', 
    'All Karnataka', 'Konkan', 'Shirdi', 'Trimbakeshwar', 'Nashik', 
    'Kolhapur', 'Pune', 'Shani Shingnapur', 'Other'
  ];

  return (
    <section id="contact" className="py-30 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Plan Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to explore India? Get in touch with us today and let's create an unforgettable travel experience together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-800 mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions about our services or want to plan a custom itinerary? 
                We're here to help you every step of the way. Contact us through any of the following methods:
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-800 to-gold-500 rounded-xl flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary-800 mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm mb-1">
                        {info.action && idx === 0 ? (
                          <a 
                            href={info.action} 
                            className="hover:text-primary-800 transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-primary-800 to-gold-600 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-3">Quick Contact</h4>
              <p className="text-white/90 text-sm mb-4">
                For immediate assistance, call us directly:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+918433894555"
                  className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/30 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+91 84338 94555</span>
                </a>
                <a
                  href="tel:+918689923413"
                  className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/30 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+91 86899 23413</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-primary-800 mb-6">
              Send Us a Message
            </h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-primary-800 mb-2">
                  Thank You!
                </h4>
                <p className="text-gray-600">
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="+91 your number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Destination
                  </label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a destination</option>
                    {destinations.map((dest) => (
                      <option key={dest} value={dest}>{dest}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your travel plans, preferred dates, group size, and any special requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-800 to-gold-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;