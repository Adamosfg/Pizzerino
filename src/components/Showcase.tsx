import React from 'react';
import { motion } from 'motion/react';

const Showcase = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?auto=format&fit=crop&w=800&q=80" 
                alt="Chef preparing pizza" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent rounded-[32px] p-8 text-white hidden md:flex flex-col justify-end shadow-2xl">
              <span className="text-5xl font-bold mb-2">48h</span>
              <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Fermentation process for maximum flavor.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-serif italic text-xl mb-4 block">The Craft</span>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Patience is Our <br />
              <span className="text-accent">Secret Ingredient.</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Every Pizzerino crust begins its journey two days before it reaches your plate. Our slow-fermentation process creates a complex flavor profile and a texture that is uniquely light and digestible.
            </p>
            <ul className="space-y-4 mb-10">
              {['Heritage Sourdough Starter', 'Stone-Ground Italian Flour', 'Hand-Stretched with Precision'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-primary font-bold">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#menu" className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors">
              Explore the Menu
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:order-2"
          >
            <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" 
                alt="Elegant dining room" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:order-1"
          >
            <span className="text-accent font-serif italic text-xl mb-4 block">The Setting</span>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              A Space Designed <br />
              <span className="text-accent">For Connection.</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              From the warm glow of our wood-fired oven to the carefully curated acoustics, Pizzerino is designed to be the backdrop for your most meaningful moments.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="text-3xl font-bold text-primary block mb-1">80+</span>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Wine Selections</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-primary block mb-1">12</span>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Signature Cocktails</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
