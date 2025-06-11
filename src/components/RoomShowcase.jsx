
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Bed, Bath, Wifi, Coffee, Car } from 'lucide-react';

const RoomShowcase = ({ onRoomSelect }) => {
  const rooms = [
    {
      id: 'standard',
      name: 'Standard Room',
      price: 199,
      description: 'Comfortable and elegant room with modern amenities',
      image: 'Modern hotel standard room with comfortable bed and city view',
      features: ['Queen Bed', 'City View', 'Free WiFi', 'Mini Bar'],
      maxGuests: 2,
      size: '25 sqm'
    },
    {
      id: 'deluxe',
      name: 'Deluxe Room',
      price: 299,
      description: 'Spacious room with premium furnishings and enhanced amenities',
      image: 'Luxurious deluxe hotel room with premium furnishings and ocean view',
      features: ['King Bed', 'Ocean View', 'Premium WiFi', 'Luxury Bath'],
      maxGuests: 3,
      size: '35 sqm'
    },
    {
      id: 'suite',
      name: 'Executive Suite',
      price: 499,
      description: 'Luxurious suite with separate living area and exclusive services',
      image: 'Executive hotel suite with separate living area and panoramic city view',
      features: ['King Bed', 'Living Area', 'Panoramic View', 'Butler Service'],
      maxGuests: 4,
      size: '55 sqm'
    },
    {
      id: 'presidential',
      name: 'Presidential Suite',
      price: 999,
      description: 'Ultimate luxury with private terrace and personalized service',
      image: 'Presidential hotel suite with private terrace and luxury amenities',
      features: ['Master Bedroom', 'Private Terrace', 'Personal Chef', 'Spa Access'],
      maxGuests: 6,
      size: '120 sqm'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="rooms" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Luxurious
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Accommodations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated selection of rooms and suites, each designed to provide the ultimate comfort and luxury experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <img  
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                    alt={`${room.name} - ${room.description}`}
                   src="https://images.unsplash.com/photo-1653013805280-5b43c79fd9ec" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${room.price}/night
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {room.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {room.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{room.maxGuests} guests</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>{room.size}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => onRoomSelect(room)}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Select Room
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RoomShowcase;
