
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      comment: 'Absolutely incredible experience! The service was impeccable, and the room was beyond luxurious. The infinity pool with city views was breathtaking.',
      image: 'Professional headshot of Sarah Johnson, a satisfied hotel guest'
    },
    {
      name: 'Michael Chen',
      location: 'Tokyo, Japan',
      rating: 5,
      comment: 'The attention to detail at Luxe Hotel is remarkable. From the moment I arrived, every staff member went above and beyond to ensure my comfort.',
      image: 'Professional headshot of Michael Chen, a business traveler'
    },
    {
      name: 'Emma Rodriguez',
      location: 'Barcelona, Spain',
      rating: 5,
      comment: 'Perfect for our anniversary celebration! The presidential suite was stunning, and the spa treatments were divine. We will definitely return.',
      image: 'Professional headshot of Emma Rodriguez, a happy couple guest'
    },
    {
      name: 'David Thompson',
      location: 'London, UK',
      rating: 5,
      comment: 'Business travel has never been this comfortable. The concierge service helped arrange all my meetings, and the fitness center was world-class.',
      image: 'Professional headshot of David Thompson, a business executive'
    },
    {
      name: 'Lisa Park',
      location: 'Seoul, South Korea',
      rating: 5,
      comment: 'The fine dining restaurant exceeded all expectations. The chef personally came to our table, and every dish was a masterpiece.',
      image: 'Professional headshot of Lisa Park, a food enthusiast'
    },
    {
      name: 'James Wilson',
      location: 'Sydney, Australia',
      rating: 5,
      comment: 'Family vacation perfection! The kids loved the pool, and we adults enjoyed the spa. The staff made sure everyone had an amazing time.',
      image: 'Professional headshot of James Wilson, a family man'
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
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Guest
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Experiences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what our valued guests have to say about their extraordinary stays at Luxe Hotel.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-purple-600 opacity-50" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.comment}"
                  </p>

                  {/* Guest Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 p-0.5">
                      <img  
                        className="w-full h-full rounded-full object-cover bg-white" 
                        alt={`${testimonial.name} - Guest testimonial`}
                       src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <p className="text-gray-600 font-medium">Guest Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              5,000+
            </div>
            <p className="text-gray-600 font-medium">Happy Guests</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              4.9
            </div>
            <p className="text-gray-600 font-medium">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              95%
            </div>
            <p className="text-gray-600 font-medium">Return Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
