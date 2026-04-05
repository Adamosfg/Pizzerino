import React from 'react';
import { motion } from 'motion/react';
import { testimonials } from '../data';
import { Star, Quote } from 'lucide-react';
import { staggerContainer, fadeUp } from '../animations';

const Testimonials = () => {
  return (
    <section className="py-24 bg-bg-warm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
          >
            Words From Our Guests
          </motion.h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-accent text-accent" />
            ))}
          </div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
              className="bg-white p-8 rounded-3xl border-l-4 border-accent shadow-sm flex flex-col h-full"
            >
              <Quote className="text-accent/20 mb-6" size={40} />
              <p className="text-primary/80 text-lg leading-relaxed mb-8 italic flex-grow">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
