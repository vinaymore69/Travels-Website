import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Heart } from 'lucide-react';
import VisitorStats from './VisitorStats';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Locations', href: '#locations' },
    { name: 'Download Guide', href: '#booklet' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const popularDestinations = [
    'Goa', 'Gujarat', 'Karnataka', 'Lonavala', 'Mahabaleshwar', 
    'Shirdi', 'Konkan', 'Pune'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
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
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">MKB Tours</span>
                <span className="text-xs text-gold-300 font-medium">& Travel</span>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Your trusted travel partner for exploring the incredible beauty of India. 
              Creating memorable journeys with personalized service and attention to detail.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/carwale_marathi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-gold-300 transition-colors block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Popular Destinations</h3>
            <ul className="space-y-3">
              {popularDestinations.map((destination, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="text-white/80 hover:text-gold-300 transition-colors block"
                  >
                    {destination}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gold-300 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+918433894555" className="text-white/80 hover:text-gold-300 transition-colors block">
                    +91 84338 94555
                  </a>
                  <a href="tel:+918689923413" className="text-white/80 hover:text-gold-300 transition-colors block">
                    +91 86899 23413
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gold-300 mt-1 flex-shrink-0" />
                <a href="mailto:Shreemkb@gmail.com" className="text-white/80 hover:text-gold-300 transition-colors">
                  Shreemkb@gmail.com
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-300 mt-1 flex-shrink-0" />
                <div className="text-white/80">
                  <p>Anusaya Niwas,</p>
                  <p>Malpa Dongri No. 3,</p>
                  <p>Andheri East, Mumbai 400093</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Instagram className="w-5 h-5 text-gold-300 mt-1 flex-shrink-0" />
                <a 
                  href="https://instagram.com/carwale_marathi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-gold-300 transition-colors"
                >
                  @carwale_marathi
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Visitor Statistics */}
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-md">
            <VisitorStats />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-white/60">
              <span>&copy; 2025 MKB Tours & Travel.</span>
              <span>All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-white/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for travelers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;