import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Database, Server, Lock, Globe, BarChart3, Cpu, Users } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    description: 'Tailor-made software solutions designed to address your unique business challenges and operational requirements.',
    icon: <Code className="text-primary-500" size={48} />,
    features: [
      'Enterprise application development',
      'Web application development',
      'Mobile application development',
      'API development and integration',
      'Legacy system modernization'
    ],
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & BI Solutions',
    description: 'Transform raw data into actionable insights with our advanced analytics and visualization solutions.',
    icon: <BarChart3 className="text-primary-500" size={48} />,
    features: [
      'Business intelligence implementation',
      'Predictive analytics',
      'Data visualization dashboards',
      'Real-time analytics',
      'Data warehouse solutions'
    ],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Seamless cloud migration, management, and optimization services for improved scalability and performance.',
    icon: <Globe className="text-primary-500" size={48} />,
    features: [
      'Cloud migration strategies',
      'Multi-cloud management',
      'Cloud-native application development',
      'Serverless architecture',
      'Cloud cost optimization'
    ],
    image: 'https://images.pexels.com/photos/5474282/pexels-photo-5474282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security services to protect your digital assets against evolving cyber threats.',
    icon: <Lock className="text-primary-500" size={48} />,
    features: [
      'Security assessment and auditing',
      'Threat detection and response',
      'Security architecture design',
      'Compliance management',
      'Security training and awareness'
    ],
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Cutting-edge AI solutions that analyze data, derive insights, and automate decision-making processes.',
    icon: <Cpu className="text-primary-500" size={48} />,
    features: [
      'Machine learning model development',
      'Natural language processing',
      'Computer vision solutions',
      'Intelligent automation',
      'AI strategy consulting'
    ],
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    description: 'Strategic technology consulting to help businesses leverage IT for growth, efficiency, and competitive advantage.',
    icon: <Users className="text-primary-500" size={48} />,
    features: [
      'Digital transformation strategy',
      'IT roadmap development',
      'Technology assessment',
      'Process optimization',
      'IT governance and compliance'
    ],
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Services | Basel Dynamics Tech Solutions';
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="bg-dark-800 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Our <span className="neon-text">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Comprehensive technology solutions designed to transform your business and drive innovation.
          </motion.p>
        </div>
      </Section>
      
      {/* Services Overview */}
      <Section>
        <SectionTitle 
          title="What We Offer" 
          subtitle="Explore our range of specialized technology services tailored to meet your business needs."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card hover className="h-full flex flex-col">
                <div className="h-56 rounded-t-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-heading font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <h4 className="text-lg font-medium mb-3 neon-text">Key Features</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-500 mr-2 mt-1">•</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <Link to={`/services/${service.id}`}>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Our Approach */}
      <Section className="bg-dark-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Our <span className="neon-text">Approach</span>
            </h2>
            <p className="text-gray-300 mb-8">
              At Basel Dynamics Tech, we follow a systematic and collaborative approach to ensure that our services deliver maximum value to your business. Our process is designed to be transparent, efficient, and focused on your specific needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 bg-dark-700 rounded-full flex items-center justify-center mr-4 border border-primary-500">
                  <span className="text-primary-500 font-heading font-bold">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Discovery & Analysis</h3>
                  <p className="text-gray-400">We begin by understanding your business objectives, challenges, and requirements through comprehensive discussions and analysis.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 bg-dark-700 rounded-full flex items-center justify-center mr-4 border border-primary-500">
                  <span className="text-primary-500 font-heading font-bold">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Strategy & Planning</h3>
                  <p className="text-gray-400">We develop a tailored strategy and project plan that aligns with your goals and outlines the path to successful implementation.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 bg-dark-700 rounded-full flex items-center justify-center mr-4 border border-primary-500">
                  <span className="text-primary-500 font-heading font-bold">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Implementation & Development</h3>
                  <p className="text-gray-400">Our expert team executes the plan using industry best practices, agile methodologies, and cutting-edge technologies.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 bg-dark-700 rounded-full flex items-center justify-center mr-4 border border-primary-500">
                  <span className="text-primary-500 font-heading font-bold">04</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Testing & Quality Assurance</h3>
                  <p className="text-gray-400">We rigorously test all solutions to ensure they meet the highest standards of quality, security, and performance.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 bg-dark-700 rounded-full flex items-center justify-center mr-4 border border-primary-500">
                  <span className="text-primary-500 font-heading font-bold">05</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Deployment & Support</h3>
                  <p className="text-gray-400">We ensure smooth deployment and provide ongoing support and maintenance to optimize performance and address any issues.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our Approach" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -top-6 -left-6 bg-dark-800 p-6 rounded-lg shadow-lg neon-border">
              <div className="text-5xl font-bold neon-text mb-2">10+</div>
              <div className="text-gray-400">Years of Excellence</div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-dark-800 p-6 rounded-lg shadow-lg neon-border">
              <div className="text-5xl font-bold neon-text mb-2">500+</div>
              <div className="text-gray-400">Successful Projects</div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-dark-800 to-dark-700 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to <span className="neon-text">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Contact Us
              </Button>
            </Link>
            <Link to="/contact#demo">
              <Button variant="outline" size="lg">
                Request a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ServicesPage;