import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    destination: '',
    customDestination: '',
    car: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://formspree.io/f/mldnnndw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });
    } catch (error) {
      console.error('Form submission error:', error);
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        destination: '',
        car: '',
        customDestination: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['Rushikesh: +91 84338 94555', 'Vikas: +91 81698 20906', 'Ramesh: +91 77000 38840', 'Sushant: +91 98706 87603','Raj: +91 70215 96018','Aniket: +91 98336 13079']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['Shreemkb@gmail.com']
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Anusaya Niwas, Malpa Dongri No. 3', 'Andheri East, Mumbai 400093'],
      action: 'https://www.google.com/maps?q=19.123648014425907,72.85629310637911'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sun: 24/7', 'Emergency Support Available']
    }
  ];

  const services = [
    { value: 'localRental', label: 'Local Rental' },
    { value: 'airportTransfer', label: 'Airport Transfer' },
    { value: 'outstationTravel', label: 'Outstation Travel' },
    { value: 'mumbaiDarshan', label: 'Mumbai Darshan' }
  ];

  const destinations: Record<string, string[]> = {
    localRental: ['Mumbai Local', 'Thane', 'Navi Mumbai', 'Kalyan-Dombivli', 'Vasai-Virar', 'Other'],
    airportTransfer: ['Mumbai Airport', 'Pune Airport', 'Other'],
    outstationTravel: [
      'Karjat', 'Lonavala', 'Mahabaleshwar', 'All Gujarat', 'All Goa', 'All Karnataka', 'Konkan', 'Shirdi',
      'Trimbakeshwar', 'Nashik', 'Kolhapur', 'Pune', 'Shani Shingnapur', 'Other'
    ],
    mumbaiDarshan: ['Full Day Mumbai Tour', 'Half Day Mumbai Tour', 'Bollywood Tour', 'Heritage Tour', 'Other']
  };

    const carOptions = [
    'Maruti Suzuki Ertiga - 7 Seater, Petrol/CNG, Manual/Automatic',
    'Maruti Suzuki Dzire - 4+1 Seater, Petrol/CNG, Manual/Automatic',
    'Maruti Suzuki WagonR - 4+1 Seater, Petrol/CNG, Manual/Automatic',
    'Toyota Innova Crysta - 7-8 Seater, Diesel/Petrol, Manual/Automatic'
  ];

  const currentDestinations =
    formData.service && destinations[formData.service]
      ? destinations[formData.service]
      : [];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Plan Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to explore India? Get in touch with us today and let's create an unforgettable travel experience together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-800 to-gold-600 rounded-xl flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-800 mb-2">{info.title}</h4>
                  {info.details.map((detail, di) => (
                    <p key={di} className="text-gray-600 text-sm mb-1">
                      {info.title === 'Call Us' ? (
                        <a
                          href={`tel:${detail.replace(/\s+/g, '')}`}
                          className="hover:text-blue-800 transition-colors flex items-center space-x-1"
                        >
                          <span>{detail}</span>
                        </a>
                      ) : info.title === 'Email Us' ? (
                        <a
                          href={`mailto:${detail}`}
                          className="hover:text-blue-800 transition-colors flex items-center space-x-1"
                        >
                          <span>{detail}</span>
                        </a>
                      ) : info.title === 'Visit Us' && info.action ? (
                        <a
                          href={info.action}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-800 transition-colors flex items-center space-x-1"
                        >
                          <span>{detail}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-blue-800 mb-4">Our Location</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8234567890123!2d72.85629310637911!3d19.123648014425907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzI1LjEiTiA3MsKwNTEnMjIuNyJF!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MKB Tours & Travel Location"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-800 to-gold-600 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-3">Quick Contact</h4>
              <p className="text-white/90 text-sm mb-4">
                For immediate assistance, call us directly:
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                {contactInfo[0].details.map((num, i) => (
                  <a
                    key={i}
                    href={`tel:${num.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/30 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">{num}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">Send Us a Message</h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-blue-800 mb-2">Thank You!</h4>
                <p className="text-gray-600 mb-2">
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
                <p className="text-blue-800 font-medium">
                  Name: {formData.name} <br />
                  Phone: {formData.phone}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="+91 your number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map(s => (
                      <option key={s.value} value={s.value}> {s.label} </option>
                    ))}
                  </select>
                </div>

                {formData.service && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Destination</label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                      <option value="">Select a destination</option>
                      {currentDestinations.map(dest => (
                        <option key={dest} value={dest}>{dest}</option>
                      ))}
                    </select>
                  </div>
                )}

                {formData.destination === 'Other' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Custom Destination</label>
                    <input
                      type="text"
                      name="customDestination"
                      value={formData.customDestination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Please specify your destination"
                    />
                  </div>
                )}


                   <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Car</label>
                  <select
                    name="car"
                    value={formData.car}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a car</option>
                    {carOptions.map((car, idx) => (
                      <option key={idx} value={car}>{car}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    placeholder="Tell us about your travel plans, preferred dates, group size, and any special requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-800 to-gold-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
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
