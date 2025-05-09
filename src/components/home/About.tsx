import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const benefits = [
    'Advanced technological infrastructure',
    'Team of seasoned experts & specialists',
    'Innovative, future-ready solutions',
    'Dedicated 24/7 client support',
    'ISO certified secure development practices',
    'Proven track record of client success'
  ];

  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-dark-800 p-4 rounded-lg shadow-lg border border-primary-500">
              <div className="text-4xl font-bold neon-text-gold">10+</div>
              <div className="text-gray-400">Years of Excellence</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            About <span className="neon-text">Basel Dynamics Tech</span>
          </h2>
          <p className="text-gray-300 mb-6">
            At Basel Dynamics Tech, we are more than just a technology company. We are innovation partners committed to transforming businesses through cutting-edge technological solutions tailored to their specific needs.
          </p>
          <p className="text-gray-300 mb-8">
            Our team of skilled professionals combines deep technological expertise with industry knowledge to deliver solutions that drive growth, efficiency, and competitive advantage for our clients worldwide.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle2 className="text-primary-500 mr-2 flex-shrink-0" size={20} />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
          
          <Link to="/about">
            <Button variant="outline">Learn More About Us</Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;