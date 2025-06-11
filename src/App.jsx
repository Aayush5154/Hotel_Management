
import React, { useState } from 'react';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import RoomShowcase from '@/components/RoomShowcase';
import Amenities from '@/components/Amenities';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleBookNowClick = () => {
    setIsBookingModalOpen(true);
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedRoom(null);
  };

  return (
    <div className="min-h-screen">
      <Navigation onBookNowClick={handleBookNowClick} />
      <Hero onBookNowClick={handleBookNowClick} />
      <RoomShowcase onRoomSelect={handleRoomSelect} />
      <Amenities />
      <Testimonials />
      <Contact />
      <Footer />
      
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        selectedRoom={selectedRoom}
      />
      
      <Toaster />
    </div>
  );
}

export default App;
