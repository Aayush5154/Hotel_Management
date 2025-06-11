
import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Car, Coffee, Dumbbell, Waves, Utensils, Bath as Spa, Shield, Clock, Users, MapPin, Phone } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: Wifi,
      title: 'High-Speed WiFi',
      description: 'Complimentary high-speed internet throughout the property',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Car,
      title: 'Valet Parking',
      description: 'Secure valet parking service available 24/7',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'State-of-the-art gym with personal training available',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Waves,
      title: 'Infinity Pool',
      description: 'Rooftop infinity pool with stunning city views',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Utensils,
      title: 'Fine Dining',
      description: 'Award-winning restaurants with world-class cuisine',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Spa,
      title: 'Luxury Spa',
      description: 'Full-service spa with rejuvenating treatments',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Round-the-clock security for your peace of mind',
      color: 'from-gray-500 to-slate-500'
    },
    {
      icon: Clock,
      title: 'Concierge Service',
      description: 'Personal concierge to assist with all your needs',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="amenities" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            World-Class
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Amenities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Indulge in our comprehensive range of luxury amenities designed to exceed your expectations and create unforgettable experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <div className="glass rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${amenity.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {amenity.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center glass rounded-2xl p-6">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Event Spaces</h3>
            <p className="text-gray-300 text-sm">
              Elegant venues for weddings, conferences, and special occasions
            </p>
          </div>
          
          <div className="text-center glass rounded-2xl p-6">
            <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Prime Location</h3>
            <p className="text-gray-300 text-sm">
              Located in the heart of the city with easy access to attractions
            </p>
          </div>
          
          <div className="text-center glass rounded-2xl p-6">
            <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
            <p className="text-gray-300 text-sm">
              Round-the-clock guest services for all your needs
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Amenities;
