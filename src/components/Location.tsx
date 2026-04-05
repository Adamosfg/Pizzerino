import React from 'react';
import { motion } from 'motion/react';
import { locationInfo } from '../data';
import { MapPin, Phone, Clock } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent font-serif italic text-xl mb-4 block"
          >
            Dove Siamo
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tighter"
          >
            Find Us in Casablanca — Gauthier
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-bg-warm p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm mb-1">Address</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{locationInfo.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm mb-1">Phone</p>
                    <p className="text-gray-500 text-sm">{locationInfo.phone}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <Clock size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm mb-1">Hours</p>
                    <p className="text-gray-500 text-sm">{locationInfo.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 h-[450px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white"
          >
            <iframe
              src={locationInfo.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pizzerino Location Map"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
