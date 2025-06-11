
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Wifi, Car, Coffee, Dumbbell } from 'lucide-react';

const Hero = ({ onBookNowClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img  
          className="w-full h-full object-cover" 
          alt="Luxury hotel exterior with modern architecture and beautiful landscaping"
         src="https://images.unsplash.com/photo-1568229988520-4bc288da81f7" />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 float">
        <div className="glass rounded-full p-4">
          <Star className="h-8 w-8 text-yellow-400" />
        </div>
      </div>
      <div className="absolute top-40 right-20 float" style={{ animationDelay: '1s' }}>
        <div className="glass rounded-full p-4">
          <Wifi className="h-8 w-8 text-blue-400" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 float" style={{ animationDelay: '2s' }}>
        <div className="glass rounded-full p-4">
          <Coffee className="h-8 w-8 text-orange-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Experience
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Luxury
            </span>
            Redefined
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Immerse yourself in unparalleled comfort and sophistication at Luxe Hotel, 
            where every moment becomes an extraordinary memory.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={onBookNowClick}
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 pulse-glow"
            >
              Book Your Stay
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Rooms
            </Button>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium">Prime Location</span>
            </div>
            <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium">5-Star Service</span>
            </div>
            <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
              <Dumbbell className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium">World-Class Amenities</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
