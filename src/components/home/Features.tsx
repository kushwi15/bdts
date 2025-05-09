import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Zap, Shield, Globe, BarChart3 } from 'lucide-react';
import Card from '../ui/Card';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

const features = [
  {
    icon: <Code size={48} />,
    title: 'Custom Software Development',
    description: 'Tailor-made software solutions designed to address your unique business challenges and operational requirements.'
  },
  {
    icon: <Layers size={48} />,
    title: 'Enterprise Applications',
    description: 'Robust, scalable applications that streamline processes, enhance productivity and drive business growth.'
  },
  {
    icon: <Zap size={48} />,
    title: 'AI & Machine Learning',
    description: 'Cutting-edge AI solutions that analyze data, derive insights, and automate decision-making processes.'
  },
  {
    icon: <Shield size={48} />,
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security services to protect your digital assets against evolving cyber threats.'
  },
  {
    icon: <Globe size={48} />,
    title: 'Cloud Services',
    description: 'Seamless cloud migration, management, and optimization services for improved scalability and performance.'
  },
  {
    icon: <BarChart3 size={48} />,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with our advanced analytics and visualization solutions.'
  }
];

const Features: React.FC = () => {
  return (
    <Section className="bg-dark-800">
      <SectionTitle 
        title="Our Expertise" 
        subtitle="Discover our comprehensive range of technological solutions designed to transform and elevate your business."
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card hover className="h-full">
              <div className="text-primary-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Features;