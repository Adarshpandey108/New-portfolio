
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  const heroRef = useRef(null);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            Hi, I'm <span className="text-gradient text-shadow">Your Name</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-medium mb-8 text-gray-300"
          >
            AI & ML Engineer | Full Stack Developer
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-5 mb-10"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-space-purple-dark/30 hover:bg-space-purple-medium transition-colors duration-300 glow"
              >
                <social.icon size={20} className="text-white" />
              </a>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#about"
              className="inline-flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-space-purple-medium/30 glow"
              >
                <ArrowDown size={20} className="text-white" />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
