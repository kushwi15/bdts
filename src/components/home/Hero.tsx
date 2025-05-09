import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import ThreeJSHero from './ThreeJSHero';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* ThreeJS Background */}
      <div className="absolute inset-0 z-0">
        <ThreeJSHero />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-tight mb-6">
              <span className="neon-text">Future-Ready</span> <br />
              <span>Technology Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Custom IT services and software applications engineered to perfection. Transforming ideas into reality.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact#demo">
                <Button variant="primary" size="lg">
                  Request Demo
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  Explore Solutions
                </Button>
              </Link>
            </div>
            
            {/* <div className="mt-12 flex items-center text-gray-400">
              <span className="mr-4">Our Clients:</span>
              <div className="flex space-x-6">
                <img src="https://via.placeholder.com/80x30/2C2C2C/FFFFFF?text=Client" alt="Client" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
                <img src="https://via.placeholder.com/80x30/2C2C2C/FFFFFF?text=Client" alt="Client" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
                <img src="https://via.placeholder.com/80x30/2C2C2C/FFFFFF?text=Client" alt="Client" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </div> */}
          </motion.div>
          
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* This space is for the 3D animation that's rendered in the background */}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 cursor-pointer"
        style={{ opacity: 1 - scrollY / 350 }}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={24} className="text-primary-500" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;