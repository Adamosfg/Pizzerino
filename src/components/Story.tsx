import React from 'react';
import { motion } from 'motion/react';
import { storyContent } from '../data';
import { fadeUp, staggerContainer } from '../animations';

const Story = () => {
  return (
    <section id="story" className="py-24 bg-bg-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" 
                alt="Chef kneading dough" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-accent/20 rounded-[48px] -z-10" />
            
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl z-20 hidden md:block">
              <div className="flex flex-col gap-4">
                {storyContent.stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-accent">{stat.value}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 leading-tight">
                      {stat.label.split(' ').join('\n')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span 
              variants={fadeUp}
              className="text-accent font-serif italic text-2xl mb-4 block"
            >
              Our Story
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight tracking-tighter"
            >
              {storyContent.title}
            </motion.h2>
            
            <div className="space-y-6">
              {storyContent.content.map((paragraph, i) => (
                <motion.p 
                  key={i}
                  variants={fadeUp}
                  className="text-gray-600 text-lg leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div 
              variants={fadeUp}
              className="mt-12"
            >
              <a 
                href="#reservations"
                className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors"
              >
                Join Our Table
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
