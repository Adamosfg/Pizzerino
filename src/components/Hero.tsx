import React from 'react';
import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '../animations';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1920&q=80" 
          alt="Authentic Italian Pizza" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-[88px] text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.span 
            variants={fadeUp}
            className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6"
          >
            EST. 1984 • AUTHENTIC ITALIAN
          </motion.span>

          <motion.h1 
            variants={fadeUp}
            className="text-5xl md:text-8xl font-display font-bold text-white leading-[0.9] tracking-tighter mb-4"
          >
            The Art of the <br />
            <span className="text-white">Perfect Crust.</span>
          </motion.h1>

          <motion.p 
            variants={fadeUp}
            className="text-accent font-serif italic text-2xl md:text-4xl mb-8"
          >
            Elegance in every slice.
          </motion.p>

          <motion.p 
            variants={fadeUp}
            className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Experience the soul of Naples in a setting of refined sophistication. 
            Hand-stretched dough, heritage ingredients, and a wood-fire glow.
          </motion.p>

          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#menu"
              className="px-8 py-4 bg-accent text-white rounded-full font-bold text-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-accent/20"
            >
              View Our Menu <ChevronRight size={20} />
            </a>
            <a 
              href="#reservations"
              className="px-8 py-4 bg-white text-primary rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              Book a Table
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
