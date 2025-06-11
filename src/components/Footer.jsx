
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Star,
  Award,
  Shield,
  Clock
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Rooms & Suites', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Dining', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Spa & Wellness', href: '#' }
  ];

  const services = [
    { name: 'Concierge Service', href: '#' },
    { name: 'Room Service', href: '#' },
    { name: 'Valet Parking', href: '#' },
    { name: 'Airport Shuttle', href: '#' },
    { name: 'Business Center', href: '#' },
    { name: 'Pet-Friendly', href: '#' }
  ];

  const awards = [
    { icon: Star, text: '5-Star Rating' },
    { icon: Award, text: 'Best Luxury Hotel 2024' },
    { icon: Shield, text: 'Safe Travel Certified' },
    { icon: Clock, text: '24/7 Service Excellence' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Luxe Hotel
              </span>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Experience unparalleled luxury and sophistication in the heart of the metropolitan district. Where every moment becomes an extraordinary memory.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span className="text-sm text-gray-300">123 Luxury Boulevard, Downtown District</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-sm text-gray-300">reservations@luxehotel.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors duration-300 ${social.color}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold text-white mb-6 block">Quick Links</span>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold text-white mb-6 block">Services</span>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Awards & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold text-white mb-6 block">Awards & Recognition</span>
            <div className="space-y-4">
              {awards.map((award, index) => {
                const IconComponent = award.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm text-gray-300">{award.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <span className="text-lg font-semibold text-white mb-3 block">Stay Updated</span>
              <p className="text-sm text-gray-300 mb-4">
                Subscribe to receive exclusive offers and updates
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white text-sm font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 Luxe Hotel. All rights reserved. | Privacy Policy | Terms of Service
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Powered by Excellence</span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>5-Star Luxury Experience</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
