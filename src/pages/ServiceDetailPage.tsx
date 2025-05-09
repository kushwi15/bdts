import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, CheckCircle2, Users, Clock, Award, BarChart } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

// This would typically come from an API
const serviceDetails = {
  'custom-software-development': {
    title: 'Custom Software Development',
    description: 'We design and develop tailor-made software solutions that address your unique business challenges, streamline operations, and enhance productivity.',
    longDescription: 'Our team of skilled developers creates custom software applications that perfectly align with your business processes and objectives. We combine cutting-edge technologies with proven methodologies to deliver robust, scalable, and secure solutions that give you a competitive edge.',
    process: [
      {
        title: 'Requirements Analysis',
        description: 'We work closely with you to understand your business needs, processes, and objectives to define the software requirements.'
      },
      {
        title: 'Design & Architecture',
        description: 'Our architects design the system architecture and user interfaces that will best meet your requirements.'
      },
      {
        title: 'Development',
        description: 'Using agile methodologies, we develop your software in iterative cycles, providing regular updates and gathering feedback.'
      },
      {
        title: 'Testing & QA',
        description: 'We perform rigorous testing to ensure your software is bug-free, secure, and meets all requirements.'
      },
      {
        title: 'Deployment',
        description: 'We deploy your software to your preferred environment, ensuring a smooth transition and minimal disruption.'
      },
      {
        title: 'Support & Maintenance',
        description: 'We provide ongoing support and maintenance to keep your software running smoothly and up-to-date.'
      }
    ],
    benefits: [
      'Tailored to your exact business requirements',
      'Improved operational efficiency and productivity',
      'Enhanced competitive advantage',
      'Greater flexibility and scalability',
      'Better user experience and adoption'
    ],
    expertise: [
      'Enterprise application development',
      'Web application development',
      'Mobile application development',
      'API development and integration',
      'Legacy system modernization',
      'Database design and development'
    ],
    technologies: [
      'Frontend: React, Angular, Vue.js',
      'Backend: Node.js, .NET, Java, Python',
      'Mobile: React Native, Flutter',
      'Databases: SQL, NoSQL, GraphQL',
      'Cloud: AWS, Azure, Google Cloud',
      'DevOps: CI/CD, Docker, Kubernetes'
    ],
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: [
      { value: '500+', label: 'Projects Completed' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '15+', label: 'Years of Experience' },
      { value: '50+', label: 'Expert Developers' }
    ]
  },
  // Default service details for any non-matching ID
  'default': {
    title: 'Our Service',
    description: 'We provide comprehensive technology solutions designed to transform your business and drive innovation.',
    longDescription: 'At Basel Dynamics Tech, we offer a wide range of technology services tailored to meet your specific business needs. Our team of experts combines deep technical expertise with industry knowledge to deliver solutions that drive growth, efficiency, and competitive advantage.',
    process: [
      {
        title: 'Discovery',
        description: 'We thoroughly assess your requirements and objectives to understand your unique challenges and opportunities.'
      },
      {
        title: 'Strategy',
        description: 'We develop a tailored strategy that aligns with your business goals and outlines the path to successful implementation.'
      },
      {
        title: 'Implementation',
        description: 'Our expert team executes the plan using industry best practices and cutting-edge technologies.'
      },
      {
        title: 'Optimization',
        description: 'We continuously monitor and optimize the solution to ensure it delivers maximum value to your business.'
      }
    ],
    benefits: [
      'Enhanced operational efficiency',
      'Improved decision-making through data-driven insights',
      'Increased agility and adaptability',
      'Reduced costs and resource requirements',
      'Strengthened competitive advantage'
    ],
    expertise: [
      'Digital transformation',
      'Technology strategy',
      'Process optimization',
      'Systems integration',
      'Innovation management'
    ],
    technologies: [
      'Cloud computing',
      'Artificial intelligence',
      'Machine learning',
      'Big data analytics',
      'Internet of Things (IoT)',
      'Blockchain'
    ],
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: [
      { value: '10+', label: 'Years of Excellence' },
      { value: '200+', label: 'Satisfied Clients' },
      { value: '95%', label: 'Client Retention' },
      { value: '24/7', label: 'Support' }
    ]
  }
};

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams();
  const service = serviceDetails[id as keyof typeof serviceDetails] || serviceDetails.default;

  useEffect(() => {
    document.title = `${service.title} | Basel Dynamics Tech Solutions`;
    window.scrollTo(0, 0);
  }, [service.title]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="bg-dark-800 py-16">
        <Link to="/services" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ChevronLeft size={20} className="mr-1" />
          <span>Back to Services</span>
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              {service.description}
            </p>
            <div className="mb-8">
              <Link to="/contact">
                <Button variant="primary" size="lg" className="mr-4">
                  Request Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* Overview Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6 neon-text">
            Overview
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {service.longDescription}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {service.stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <div className="text-3xl md:text-4xl font-bold neon-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Our Process */}
      <Section className="bg-dark-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-10 neon-text">
            Our Process
          </h2>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="absolute left-[19px] top-0 bottom-0 w-1 bg-primary-500 hidden md:block"></div>
            
            <div className="space-y-12">
              {service.process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center text-dark-900 font-bold z-10">
                          {index + 1}
                        </div>
                        <div className="hidden md:block h-1 bg-primary-500 flex-grow ml-4"></div>
                      </div>
                    </div>
                    <div className="md:w-3/4 md:pl-8">
                      <h3 className="text-2xl font-heading font-semibold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      
      {/* Benefits & Expertise */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6 neon-text">
              Benefits
            </h2>
            <div className="bg-dark-700 p-8 rounded-lg">
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex">
                    <CheckCircle2 className="text-primary-500 mt-1 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6 neon-text">
              Our Expertise
            </h2>
            <div className="bg-dark-700 p-8 rounded-lg">
              <ul className="space-y-4">
                {service.expertise.map((item, index) => (
                  <li key={index} className="flex">
                    <span className="text-primary-500 mr-3">•</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-3xl font-heading font-bold mb-6 neon-text">
            Technologies We Use
          </h2>
          <div className="bg-dark-700 p-8 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.technologies.map((tech, index) => (
                <div key={index} className="flex">
                  <span className="text-primary-500 mr-3">•</span>
                  <span className="text-gray-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section className="bg-dark-900 border-t border-dark-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Ready to Transform Your Business with Our <span className="neon-text">{service.title}</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team today to discuss your project requirements and how we can help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Sales Team
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ServiceDetailPage;