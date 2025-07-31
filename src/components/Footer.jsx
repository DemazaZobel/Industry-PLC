import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h3 className="text-white text-lg font-semibold mb-4">Dankal Industries</h3>
          <p className="text-sm mb-4">
            Empowering growth across manufacturing, construction, and global trade through innovative solutions.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            {/* Social icons would go here */}
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right">
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-center md:justify-end">
              <Mail className="w-4 h-4 mr-2 text-accent" />
              <a href="mailto:info@dankal.com" className="hover:text-white transition-colors">
                info@dankal.com
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <Phone className="w-4 h-4 mr-2 text-accent" />
              <a href="tel:+1234567890" className="hover:text-white transition-colors">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <MapPin className="w-4 h-4 mr-2 text-accent" />
              <span>123 Industrial Way, City, Country</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-6 text-center">
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Dankal Industries PLC. All rights reserved.
        </p>
        <p className="text-xs mt-1 text-gray-600">
          Registered in England No. 12345678 | VAT No. GB123456789
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;