import React from 'react';
import { Pizza, Instagram, Facebook, Twitter, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10 rounded-t-[48px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Pizza className="text-accent" size={32} />
              <span className="text-2xl font-display font-bold tracking-tighter">PIZZERINO</span>
            </div>
            <p className="text-white/50 leading-relaxed">
              Crafting the finest Neapolitan pizza with heritage ingredients and modern elegance since 1984.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-white/50">
              <li><a href="#menu" className="hover:text-accent transition-colors">Our Menu</a></li>
              <li><a href="#experience" className="hover:text-accent transition-colors">The Experience</a></li>
              <li><a href="#reservations" className="hover:text-accent transition-colors">Reservations</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/50">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-accent" />
                <span>123 Pizza Lane, Naples District</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-accent" />
                <span>Open Daily: 12pm - 11pm</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-6">Join The Club</h4>
            <p className="text-white/50 text-sm mb-4">Subscribe for exclusive tasting events and seasonal updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-accent"
              />
              <button className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-accent/80 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-white/30 text-xs">
          <p>© 2024 Pizzerino. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
