
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, CreditCard, Mail, Phone, User, MapPin, Clock } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const BookingModal = ({ isOpen, onClose, selectedRoom }) => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: selectedRoom?.id || '',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    specialRequests: '',
    paymentMethod: 'credit-card'
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [nights, setNights] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Room prices
  const roomPrices = {
    standard: 199,
    deluxe: 299,
    suite: 499,
    presidential: 999
  };

  // Calculate total price when dates or room type change
  useEffect(() => {
    if (bookingData.checkIn && bookingData.checkOut && bookingData.roomType) {
      const checkInDate = new Date(bookingData.checkIn);
      const checkOutDate = new Date(bookingData.checkOut);
      const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
      const nightCount = Math.ceil(timeDiff / (1000 * 3600 * 24));
      
      if (nightCount > 0) {
        setNights(nightCount);
        const roomPrice = roomPrices[bookingData.roomType] || 0;
        setTotalPrice(nightCount * roomPrice);
      } else {
        setNights(0);
        setTotalPrice(0);
      }
    }
  }, [bookingData.checkIn, bookingData.checkOut, bookingData.roomType]);

  // Update room type when selectedRoom changes
  useEffect(() => {
    if (selectedRoom) {
      setBookingData(prev => ({
        ...prev,
        roomType: selectedRoom.id
      }));
    }
  }, [selectedRoom]);

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateStep1 = () => {
    if (!bookingData.checkIn || !bookingData.checkOut || !bookingData.roomType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all booking details.",
        variant: "destructive"
      });
      return false;
    }

    const checkInDate = new Date(bookingData.checkIn);
    const checkOutDate = new Date(bookingData.checkOut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkInDate < today) {
      toast({
        title: "Invalid Date",
        description: "Check-in date cannot be in the past.",
        variant: "destructive"
      });
      return false;
    }

    if (checkOutDate <= checkInDate) {
      toast({
        title: "Invalid Date",
        description: "Check-out date must be after check-in date.",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const validateStep2 = () => {
    if (!bookingData.fullName || !bookingData.email || !bookingData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required guest details.",
        variant: "destructive"
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(bookingData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const generateBookingNumber = () => {
    return 'LH' + Date.now().toString().slice(-8) + Math.random().toString(36).substr(2, 4).toUpperCase();
  };

  const sendConfirmationEmail = async (bookingNumber) => {
    const templateParams = {
      to_email: bookingData.email,
      guest_name: bookingData.fullName,
      booking_number: bookingNumber,
      room_type: selectedRoom?.name || bookingData.roomType,
      check_in: new Date(bookingData.checkIn).toLocaleDateString(),
      check_out: new Date(bookingData.checkOut).toLocaleDateString(),
      nights: nights,
      guests: bookingData.guests,
      total_price: totalPrice,
      phone: bookingData.phone,
      special_requests: bookingData.specialRequests || 'None',
      hotel_phone: '+1 (555) 123-4567',
      hotel_email: 'reservations@luxehotel.com',
      hotel_address: '123 Luxury Boulevard, Downtown District, Metropolitan City, MC 12345'
    };

    try {
      // Note: In a real implementation, you would need to set up EmailJS with your service ID, template ID, and public key
      // For demo purposes, we'll simulate the email sending
      console.log('Email would be sent with params:', templateParams);
      
      // Simulate email sending delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return true;
    } catch (error) {
      console.error('Email sending failed:', error);
      return false;
    }
  };

  const handleSubmit = async () => {
    if (!validateStep2()) return;

    setIsSubmitting(true);
    
    try {
      const bookingNumber = generateBookingNumber();
      
      // Save booking to localStorage (in real app, this would be sent to a backend)
      const booking = {
        ...bookingData,
        bookingNumber,
        totalPrice,
        nights,
        createdAt: new Date().toISOString(),
        status: 'confirmed'
      };
      
      const existingBookings = JSON.parse(localStorage.getItem('hotelBookings') || '[]');
      existingBookings.push(booking);
      localStorage.setItem('hotelBookings', JSON.stringify(existingBookings));

      // Send confirmation email
      const emailSent = await sendConfirmationEmail(bookingNumber);
      
      if (emailSent) {
        toast({
          title: "Booking Confirmed!",
          description: `Your booking ${bookingNumber} has been confirmed. Check your email for details.`,
        });
      } else {
        toast({
          title: "Booking Confirmed!",
          description: `Your booking ${bookingNumber} has been confirmed. Email confirmation will be sent shortly.`,
        });
      }

      // Reset form and close modal
      setStep(1);
      setBookingData({
        checkIn: '',
        checkOut: '',
        guests: 1,
        roomType: '',
        fullName: '',
        email: '',
        phone: '',
        address: '',
        specialRequests: '',
        paymentMethod: 'credit-card'
      });
      onClose();
      
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "There was an error processing your booking. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const getRoomName = (roomId) => {
    const roomNames = {
      standard: 'Standard Room',
      deluxe: 'Deluxe Room',
      suite: 'Executive Suite',
      presidential: 'Presidential Suite'
    };
    return roomNames[roomId] || roomId;
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Book Your Stay
          </DialogTitle>
        </DialogHeader>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-6">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step >= stepNumber 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div className={`w-16 h-1 mx-2 ${
                  step > stepNumber ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Booking Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="checkIn">Check-in Date</Label>
                      <Input
                        id="checkIn"
                        type="date"
                        value={bookingData.checkIn}
                        onChange={(e) => handleInputChange('checkIn', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <Label htmlFor="checkOut">Check-out Date</Label>
                      <Input
                        id="checkOut"
                        type="date"
                        value={bookingData.checkOut}
                        onChange={(e) => handleInputChange('checkOut', e.target.value)}
                        min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="guests">Number of Guests</Label>
                      <Select value={bookingData.guests.toString()} onValueChange={(value) => handleInputChange('guests', parseInt(value))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6].map(num => (
                            <SelectItem key={num} value={num.toString()}>{num} Guest{num > 1 ? 's' : ''}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="roomType">Room Type</Label>
                      <Select value={bookingData.roomType} onValueChange={(value) => handleInputChange('roomType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select room type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard Room - $199/night</SelectItem>
                          <SelectItem value="deluxe">Deluxe Room - $299/night</SelectItem>
                          <SelectItem value="suite">Executive Suite - $499/night</SelectItem>
                          <SelectItem value="presidential">Presidential Suite - $999/night</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {nights > 0 && (
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Total: {nights} night{nights > 1 ? 's' : ''}</span>
                        <span className="text-2xl font-bold text-purple-600">${totalPrice}</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Guest Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={bookingData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={bookingData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={bookingData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={bookingData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Enter your address"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="specialRequests">Special Requests</Label>
                    <Textarea
                      id="specialRequests"
                      value={bookingData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      placeholder="Any special requests or preferences..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Payment & Confirmation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="paymentMethod">Payment Method</Label>
                      <Select value={bookingData.paymentMethod} onValueChange={(value) => handleInputChange('paymentMethod', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="credit-card">Credit Card</SelectItem>
                          <SelectItem value="debit-card">Debit Card</SelectItem>
                          <SelectItem value="paypal">PayPal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                      <p className="font-semibold mb-2">Payment Information:</p>
                      <p>• This is a demo booking system</p>
                      <p>• No actual payment will be processed</p>
                      <p>• You will receive a confirmation email with booking details</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Booking Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span>Room Type:</span>
                      <span className="font-semibold">{getRoomName(bookingData.roomType)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Check-in:</span>
                      <span>{new Date(bookingData.checkIn).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Check-out:</span>
                      <span>{new Date(bookingData.checkOut).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nights:</span>
                      <span>{nights}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Guests:</span>
                      <span>{bookingData.guests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Guest Name:</span>
                      <span>{bookingData.fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Email:</span>
                      <span>{bookingData.email}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Amount:</span>
                      <span className="text-purple-600">${totalPrice}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={step === 1}
          >
            Previous
          </Button>
          
          {step < 3 ? (
            <Button
              onClick={nextStep}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              {isSubmitting ? 'Processing...' : 'Confirm Booking'}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
