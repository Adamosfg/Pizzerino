import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Pizza } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 flex items-center
        ${scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] py-3'
          : 'bg-black/30 backdrop-blur-md py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Pizza className={scrolled ? 'text-primary' : 'text-white'} size={28} />
          <span className={`text-2xl font-display font-bold tracking-tighter ${scrolled ? 'text-primary' : 'text-white'}`}>
            PIZZERINO
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? 'text-dark' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#reservations"
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 ${
              scrolled
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white text-primary shadow-xl'
            }`}
          >
            Book a Table
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} className={scrolled ? 'text-dark' : 'text-white'} /> : <Menu size={24} className={scrolled ? 'text-dark' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-white shadow-2xl p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-dark hover:text-accent py-2 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservations"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 bg-primary text-white py-3 rounded-xl text-center font-bold"
            >
              Book a Table
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
