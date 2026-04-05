import React from 'react';
import { motion } from 'motion/react';
import { menuItems } from '../data';
import { fadeUp, staggerContainer } from '../animations';

const Menu = () => {
  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent font-serif italic text-xl mb-4 block"
          >
            I Nostri Piatti
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-primary tracking-tighter"
          >
            The Seasonal Menu
          </motion.h2>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <div className="flex items-center gap-4 mb-10">
                <h3 className="text-2xl font-bold text-primary whitespace-nowrap">{category}</h3>
                <div className="h-[1px] w-full bg-gray-100" />
              </div>

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
              >
                {menuItems
                  .filter(item => item.category === category)
                  .map((item) => (
                    <motion.div 
                      key={item.id}
                      variants={fadeUp}
                      className="group flex flex-col sm:flex-row gap-6"
                    >
                      <div className="w-full sm:w-32 h-32 shrink-0 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-baseline mb-2">
                          <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-lg font-display font-bold text-primary">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm italic">
            * All our pizzas are prepared with 48-hour fermented sourdough. Gluten-free options available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
