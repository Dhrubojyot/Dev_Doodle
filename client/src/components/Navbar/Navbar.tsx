'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/' },
    { name: 'Testimonials', href: '/' },
    { name: 'Contact', href: '/' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="fixed top-6 inset-x-0 max-w-6xl mx-auto z-50 px-4">
        <nav className="relative">
          <div className="flex items-center justify-between px-8 py-4 rounded-2xl bg-black/10 backdrop-blur-xl border-2 border-white/30 shadow-[0_8px_32px_rgba(255,255,255,0.1)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)] hover:border-white/40 transition-all duration-500">
            
            {/* Logo */}
            <div className="flex items-center space-x-3">
  <img 
    src="./src/assets/devlogo.png" 
    alt="Logo" 
    className="w-12 h-12 rounded-2xl" 
  />
  <span className="text-2xl font-bold text-white drop-shadow-lg">
    Dev<span className="text-[#39E079]"> Doodle</span>
  </span>
</div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="relative group px-6 py-3 rounded-xl text-sm font-semibold text-gray-200 hover:text-white transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Sharp hover effects with multiple layers */}
                  <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#39E079]/20 via-[#2bc56d]/20 to-[#1daa5b]/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute inset-0 rounded-xl border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute inset-0 rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center">
  <a
    href="https://github.com/Dhrubojyot"
    target="_blank"
    rel="noopener noreferrer"
    className="relative group px-8 py-3 rounded-xl bg-gradient-to-r from-[#39E079] via-[#2bc56d] to-[#1daa5b] text-white text-sm font-bold shadow-[0_6px_20px_rgba(57,224,121,0.4)] hover:shadow-[0_8px_25px_rgba(57,224,121,0.6)] transition-all duration-300 hover:scale-105 border-2 border-white/20 hover:border-white/30 backdrop-blur-sm"
  >
    <span className="relative z-10 drop-shadow-sm">GitHub</span>
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#39E079] via-[#2bc56d] to-[#1daa5b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute inset-0 rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-300"></div>
  </a>
</div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-24 inset-x-0 max-w-6xl mx-auto z-40 px-4 md:hidden"
          >
            <div className="rounded-2xl bg-black/20 backdrop-blur-xl border-2 border-white/30 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group px-6 py-4 rounded-xl text-base font-semibold text-gray-200 hover:text-white transition-all duration-300 border-2 border-transparent hover:border-white/20 hover:bg-white/10 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#39E079]/10 to-[#2bc56d]/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </motion.a>
                ))}
                
                {/* Mobile CTA Button */}
                <motion.a
  href="https://github.com/Dhrubojyot"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className="relative group px-8 py-4 mt-4 rounded-xl bg-gradient-to-r from-[#39E079] via-[#2bc56d] to-[#1daa5b] text-white text-base font-bold shadow-[0_6px_20px_rgba(57,224,121,0.4)] hover:shadow-[0_8px_25px_rgba(57,224,121,0.6)] transition-all duration-300 hover:scale-105 border-2 border-white/20 hover:border-white/30 backdrop-blur-sm"
>
  <span className="relative z-10 drop-shadow-sm">GitHub</span>
  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#39E079] via-[#2bc56d] to-[#1daa5b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  <div className="absolute inset-0 rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-300"></div>
</motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;