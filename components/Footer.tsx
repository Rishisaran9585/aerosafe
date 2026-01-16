
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Identity */}
          <div>
            <h3 className="text-2xl font-bold mb-4">AER<span className="text-gold">OSAFE</span></h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Premium travel & tourism solutions based in Dubai. Providing world-class services in holiday packages, luxury transport, and desert experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Company</Link></li>
              <li><Link to="/packages" className="hover:text-white transition-colors">Holiday Packages</Link></li>
              <li><Link to="/fleet" className="hover:text-white transition-colors">Our Luxury Fleet</Link></li>
              <li><Link to="/visa" className="hover:text-white transition-colors">Visa Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Office Locations */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold uppercase tracking-wider">Our Offices</h4>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold text-white mb-1">Dubai (H.O)</p>
                <p className="text-xs text-gray-400">P.O. Box 1234, Deira, Dubai, UAE</p>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1">India (Chennai)</p>
                <p className="text-xs text-gray-400">Anna Salai, Chennai, India</p>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1">India (Trivandrum)</p>
                <p className="text-xs text-gray-400">MG Road, Trivandrum, India</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} className="text-gold" />
                <span>+971 4 000 0000 (Dubai)</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} className="text-gold" />
                <span>+91 44 0000 0000 (India)</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} className="text-gold" />
                <span>bookings@aerosafe.ae</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={16} className="text-gold mt-1 shrink-0" />
                <span>Visit our main branch in Business Bay, Dubai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Aerosafe Travel & Tourism LLC. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Sister Brand: First Dream Destination (India)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
