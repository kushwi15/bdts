import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ContactPage: React.FC = () => {

  useEffect(() => {
    document.title = 'Contact Us | Basel Dynamics Tech Solutions';
  }, []);

  
  const [result, setResult] = useState("");


  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "da3d0f25-8051-46a6-9645-b7442c0c75a1");

    // formData.append("access_key", "a5c2062e-76d9-422c-b565-539e8f7981a4");   Office mail

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
            Let's <span className="neon-text">Connect</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Have questions or ready to start your next project? Reach out to our team and we'll get back to you promptly.
          </motion.p>
        </div>
      </Section>
      
      {/* Contact Information */}
      <Section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <Card hover className="h-full flex flex-col items-center text-center p-8">
              <div className="bg-dark-600 p-4 rounded-full mb-6">
                <Phone className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Call Us</h3>
              <p className="text-gray-400 mb-4">We're available Mon-Fri, 10 AM - 7 PM</p>
              <p className="text-white font-semibold">+91 80 1234 5678</p>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card hover className="h-full flex flex-col items-center text-center p-8">
              <div className="bg-dark-600 p-4 rounded-full mb-6">
                <Mail className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Email Us</h3>
              <p className="text-gray-400 mb-4">We typically respond within 24 hours</p>
              <p className="text-white font-semibold">info@baseldtsolutions.com</p>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card hover className="h-full flex flex-col items-center text-center p-8">
              <div className="bg-dark-600 p-4 rounded-full mb-6">
                <MapPin className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Visit Us</h3>
              <p className="text-gray-400 mb-4">Our headquarters location</p>
              <p className="text-white font-semibold">6th Floor, Suite No: 10, Gamma Block, Sigma Soft Tech Park</p>
            </Card>
          </motion.div>
        </div>
      </Section>
      
      {/* Contact Form */}
      <Section className="bg-dark-800 py-16" id="demo">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle title="Send Us a Message" />
            <p className="text-gray-400 mb-8">
              Fill out the form below and our team will get back to you as soon as possible. We're eager to hear about your project and how we can help bring your vision to life.
            </p>
            
            <div className="bg-dark-700 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-heading font-semibold mb-4 neon-text-gold">Office Hours</h3>
              <table className="w-full text-gray-400">
                <tbody>
                  <tr>
                    <td className="py-2">Monday - Friday:</td>
                    <td className="py-2">10:00 AM - 4:00 AM</td>
                  </tr>
                  <tr>
                    <td className="py-2">Saturday - Sunday</td>
                    <td className="py-2">Closed</td>
                  </tr>
                  <tr>
                    <td className="py-2">Today</td>
                    <td className="py-2">
                      {(() => {
                        const now = new Date();
                        const day = now.getDay();
                        const hours = now.getHours();
                        const minutes = now.getMinutes();
                        
                        if (day === 0 || day === 6) {
                          return <span className="text-red-400">Closed</span>;
                        }
                        
                        const isOpen = (hours > 10 || (hours === 10 && minutes >= 0)) && 
                                      (hours < 28  || (hours === 28 && minutes === 0));
                        
                        return isOpen 
                          ? <span className="text-green-400">Open - Closes at 4:00 AM</span>
                          : <span className="text-red-400">Closed - Opens at 10:00 AM</span>;
                      })()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="aspect-w-16 aspect-h-9">
              <div className="w-full h-80 bg-dark-700 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.732221144487!2d77.73833591027343!3d12.955817087305356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1302aa8f3afd%3A0x12e5e8f11df20e45!2sBASEL%20DYNAMICS%20TECH%20SOLUTIONS%20PRIVATE%20LIMITED!5e1!3m2!1sen!2sin!4v1746701097213!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="p-8">
              <form onSubmit={onSubmit}>
                <div className="mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      className="w-full bg-dark-600 border border-dark-500 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full bg-dark-600 border border-dark-500 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    className="w-full bg-dark-600 border border-dark-500 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                  <select 
                    id="subject" 
                    name="subject"
                    className="w-full bg-dark-600 border border-dark-500 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="general">General Inquiry</option>
                    <option value="demo">Request a Demo</option>
                    <option value="quote">Request a Quote</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-dark-600 border border-dark-500 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <Button variant="primary" className="w-full" type="submit">
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
                <span className="block mt-4 text-center text-gray-300">{result}</span>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;