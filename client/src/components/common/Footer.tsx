'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/Dhrubojyot' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/DhrubojyotiCha9' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/dhrubojyoti-chakraborty-567857257/' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/i_am_dhrubojyoti_chakraborty/' },
  ];

  return (
    <footer className="relative bg-transparent overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 max-md:hidden top-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute -left-20 top-20 z-10 h-64 w-64 rounded-full bg-[#39E079]/5 blur-3xl" />
      <div className="absolute -right-20 bottom-20 z-10 h-64 w-64 rounded-full bg-[#39E079]/5 blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Newsletter Section */}
        <div className="relative py-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full border border-gray-600 bg-gray-900/50 px-3 py-1 text-xs text-gray-300 mb-4">
              Newsletter
            </span>
            <h3 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl mb-4">
              Stay Updated with <span className="text-[#39E079]">Latest Features</span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Get the latest updates, feature releases, and development insights delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:border-[#39E079] focus:outline-none focus:ring-2 focus:ring-[#39E079]/20"
                />
              </div>
              <motion.button
                onClick={handleSubmit}
                className="px-6 py-3 bg-[#39E079] hover:bg-[#2bc56d] text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            <div
              className="absolute inset-0 mx-auto h-32 max-w-xs blur-[118px] -z-10"
              style={{
                background:
                  'linear-gradient(152.92deg, rgba(57, 224, 121, 0.1) 4.54%, rgba(57, 224, 121, 0.15) 34.2%, rgba(57, 224, 121, 0.05) 77.55%)',
              }}
            ></div>
          </div>
        </div>

        {/* Spotlight Section */}
        <div className="relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/70 to-transparent">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl h-[200px]">
              <div 
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(50% 50% at 50% 0%, rgba(57, 224, 121, 0.4) 0%, rgba(57, 224, 121, 0.1) 50%, transparent 100%)',
                  filter: 'blur(60px)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-10 h-10">
                  <img 
                    src="/src/assets/devlogo.png"
                    alt="Dev Doodle Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-white">Dev</span>
                <span className="text-xl font-bold text-[#39E079]">Doodle</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-lg">
              Dev Doodle is where code meets creativity. It’s a collaborative space for developers and designers to build, sketch, and innovate together.
              </p>
              
              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-4 h-4 text-[#39E079]" />
                  <span>devdoodle@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-4 h-4 text-[#39E079]" />
                  <span>+91 1234567890</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-[#39E079]" />
                  <span>Kolkata, India</span>
                </div>
              </div>
            </div>

            {/* Social Links Section */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="p-3 bg-gray-900/50 border border-gray-600/30 rounded-lg text-gray-400 hover:text-[#39E079] hover:border-[#39E079]/30 transition-all duration-300 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-gray-600/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-[#39E079] fill-[#39E079]" />
              <span>by the Binary Avengers team</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Dev Doodle. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}