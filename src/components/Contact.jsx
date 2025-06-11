
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Car, Plane } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Luxury Boulevard', 'Downtown District', 'Metropolitan City, MC 12345'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568', 'Toll-free: 1-800-LUXE-HTL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['reservations@luxehotel.com', 'concierge@luxehotel.com', 'events@luxehotel.com'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Front Desk: 24/7', 'Concierge: 6:00 AM - 12:00 AM', 'Restaurant: 6:00 AM - 11:00 PM'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const transportInfo = [
    {
      icon: Car,
      title: 'By Car',
      description: '15 minutes from city center via Highway 101. Valet parking available.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Plane,
      title: 'From Airport',
      description: '25 minutes from International Airport. Complimentary shuttle service available.',
      color: 'from-cyan-500 to-blue-500'
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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
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
            Get In
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're here to assist you 24/7. Contact us for reservations, inquiries, or any special requests.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <Card className="h-full border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <CardHeader className="text-center pb-3">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${info.color} p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-300 text-sm mb-1">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Transportation Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {transportInfo.map((transport, index) => {
            const IconComponent = transport.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${transport.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                          {transport.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {transport.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Find Us</h3>
          <p className="text-gray-300 mb-6">
            Located in the heart of the metropolitan district, Luxe Hotel offers easy access to the city's finest attractions, shopping, and business centers.
          </p>
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-8 border border-white/10">
            <img  
              className="w-full h-64 object-cover rounded-lg" 
              alt="Luxe Hotel location map showing prime downtown location"
             src="https://images.unsplash.com/photo-1587842081983-4162ef2690c2" />
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="glass rounded-xl p-6 inline-block">
            <h4 className="text-lg font-semibold text-white mb-2">24/7 Emergency Assistance</h4>
            <p className="text-yellow-400 font-bold text-xl">+1 (555) 911-LUXE</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
