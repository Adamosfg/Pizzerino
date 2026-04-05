import React, { useState } from 'react';
import { motion } from 'motion/react';
import { fadeUp } from '../animations';
import { Calendar, Users, Clock, CheckCircle2 } from 'lucide-react';

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="reservations" className="py-24 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center"
          >
            <CheckCircle2 size={80} className="text-accent mb-6" />
            <h2 className="text-4xl font-bold mb-4">Table Reserved</h2>
            <p className="text-white/70 text-lg mb-8">
              Grazie! We've sent a confirmation email to your inbox. We look forward to hosting you at Pizzerino.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 bg-white text-primary rounded-full font-bold"
            >
              Make Another Booking
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservations" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-serif italic text-xl mb-4 block">Prenotazioni</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Secure Your <br />
              <span className="text-accent">Italian Evening.</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Join us for an unforgettable dining experience. Whether it's a romantic evening or a celebration with friends, we ensure every detail is perfect.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Clock size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-bold">Opening Hours</p>
                  <p className="text-sm">Mon-Sun: 12:00 PM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Users size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-bold">Group Bookings</p>
                  <p className="text-sm">For parties over 8, please call us directly.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="date" 
                      required
                      className="w-full pl-12 pr-4 py-3 bg-bg-warm border border-gray-100 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <select className="w-full pl-12 pr-4 py-3 bg-bg-warm border border-gray-100 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all appearance-none">
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5 Guests</option>
                      <option>6 Guests</option>
                      <option>7 Guests</option>
                      <option>8 Guests</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-bg-warm border border-gray-100 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 bg-bg-warm border border-gray-100 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Special Requests</label>
                <textarea 
                  placeholder="Allergies, special occasions, etc."
                  className="w-full px-4 py-3 bg-bg-warm border border-gray-100 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all h-24 resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-accent text-white rounded-xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-accent/20"
              >
                Confirm Reservation
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
