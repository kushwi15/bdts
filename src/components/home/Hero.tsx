import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import ThreeJSHero from './ThreeJSHero';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleThemeChange = () => {
      const currentTheme = localStorage.getItem('theme');
      const shouldBeDark = currentTheme === 'dark';
      if (shouldBeDark !== darkMode) {
        setDarkMode(shouldBeDark);
      }
    };

    window.addEventListener('theme-changed', handleThemeChange);

    return () => {
      window.removeEventListener('theme-changed', handleThemeChange);
    };
  }, [darkMode]);

  return (
    <div className={`relative min-h-screen flex items-center overflow-hidden ${darkMode ? 'bg-dark' : 'bg-white'}`}>
      <div className="absolute inset-0 z-0 lg:block">
        <ThreeJSHero />
      </div>

      {/* Conditional Content Rendering */}
      {darkMode ? (
        <div className="container-custom relative z-10 pt-12 lg:pt-20">
          <div className="grid grid-cols-1 gap-8 items-center">
            <motion.div
              className="order-1 lg:order-none text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-tight mb-6">
                <span className="neon-text text-4xl">Future-Ready</span> <br />
                
                <span>Basel Dynamic </span><br />
                <span>Tech Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
                Custom IT services and software applications engineered to perfection. Transforming ideas into reality.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
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
            </motion.div>

            <motion.div
              className="lg:hidden mt-12 h-64 flex items-center justify-center order-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            ></motion.div>
          </div>
        </div>
      ) : (
        <div className="container-custom relative z-10 pt-12 lg:pt-20">
          <div className="grid grid-cols-1 gap-8 items-center">
            <motion.div
              className="order-1 lg:order-none text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-tight mb-6 text-gray-900 dark:text-gray-100">
                <span className="neon-text text-4xl">Future-Ready</span> <br />
                <span>Basel Dynamic </span><br />
                <span>Tech Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
                Custom IT services and software applications engineered to perfection. Transforming ideas into reality.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/contact#demo">
                  <Button variant="primary" size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    Request Demo
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="text-orange-500 hover:bg-orange-50 dark:text-orange-500 dark:hover:bg-orange-900">
                    Explore Solutions
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="lg:hidden mt-12 h-64 flex items-center justify-center order-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            ></motion.div>
          </div>
        </div>
      )}

      {/* Scroll indicator (remains the same) */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer ${
          darkMode ? 'text-gray-500' : 'text-gray-400'
        }`}
        style={{ opacity: 1 - scrollY / 350 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={24} className={darkMode ? "text-orange-400" : "text-orange-500"} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;