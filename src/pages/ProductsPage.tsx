import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Database, BarChart, Lock, Globe, Code, Server } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    icon: React.ReactNode;
    image: string;
}

const products: Product[] = [
    {
        id: 'data-analyzer-pro',
        name: 'Data Analyzer Pro',
        category: 'Analytics',
        description: 'Advanced data analytics platform with real-time insights and customizable dashboards.',
        icon: <BarChart size={40} />,
        image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 'secure-vault',
        name: 'SecureVault',
        category: 'Cybersecurity',
        description: 'Enterprise-grade security solution for data protection and threat prevention.',
        icon: <Lock size={40} />,
        image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 'cloudshift',
        name: 'CloudShift',
        category: 'Cloud Services',
        description: 'Seamless cloud migration and management platform for businesses of all sizes.',
        icon: <Globe size={40} />,
        image: 'https://images.pexels.com/photos/5474282/pexels-photo-5474282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 'codeforge',
        name: 'CodeForge',
        category: 'Development',
        description: 'Collaborative coding environment with integrated testing and deployment tools.',
        icon: <Code size={40} />,
        image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 'database-commander',
        name: 'Database Commander',
        category: 'Data Management',
        description: 'Comprehensive database management system with advanced querying capabilities.',
        icon: <Database size={40} />,
        image: 'https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 'serverwatch',
        name: 'ServerWatch',
        category: 'Infrastructure',
        description: 'Real-time server monitoring and performance optimization platform.',
        icon: <Server size={40} />,
        image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
];

const ProductsPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
        }
        return false;
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleThemeChange = () => {
                const currentTheme = localStorage.getItem('theme');
                const shouldBeDark = currentTheme === 'dark';
                setDarkMode(shouldBeDark);
            };
            window.addEventListener('theme-changed', handleThemeChange);
            return () => window.removeEventListener('theme-changed', handleThemeChange);
        }
    }, []);

    useEffect(() => {
        document.title = 'Products | Basel Dynamics Tech Solutions';
    }, []);

    const categories = ['All', 'Analytics', 'Cybersecurity', 'Cloud Services', 'Development', 'Data Management', 'Infrastructure'];

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className={`pt-20 ${darkMode ? 'bg-dark-900 text-gray-100' : 'bg-white text-gray-900'}`}>
            {/* Hero Section */}
            <Section className={darkMode ? "bg-dark-800 py-20" : "bg-gray-100 py-20"}>
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={`text-4xl md:text-5xl font-heading font-bold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}
                    >
                        Our <span className="neon-text">Product</span> Portfolio
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                        Explore our innovative software solutions designed to address modern business challenges and optimize operations.
                    </motion.p>
                </div>
            </Section>

            {/* Categories Filter */}
            <Section className="py-8">
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full transition-all duration-300 ${
                                selectedCategory === category
                                    ? darkMode
                                        ? 'bg-orange-400 shadow-neon text-gray-900 '
                                        : 'bg-orange-500 text-white shadow-neon'
                                    : darkMode
                                        ? 'bg-dark-700  text-gray-300 hover:bg-gray-600'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card hover className={`h-full flex flex-col ${darkMode ? 'bg-dark-700 border border-dark-700 shadow-lg hover:shadow-xl' : 'bg-white border border-gray-200 shadow-md hover:shadow-lg'}`}>
                                <div className="h-56 rounded-t-lg overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6 flex-grow">
                                    <div className={`mb-4 ${darkMode ? 'text-orange-400' : 'text-orange-500'}`}>{product.icon}</div>
                                    <div className="mb-4">
                                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${darkMode ? 'bg-dark-600 text-orange-400' : 'bg-gray-200 text-orange-500'}`}>
                                            {product.category}
                                        </span>
                                    </div>
                                    <h3 className={`text-2xl font-heading font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{product.name}</h3>
                                    <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{product.description}</p>
                                </div>
                                <div className="p-6 pt-0 mt-auto">
                                    <Link to={`/products/${product.id}`}>
                                        <Button variant="outline" className={`w-full ${darkMode ? 'text-gray-300 border-gray-700 hover:bg-gray-700 hover:text-gray-100' : 'text-gray-600 border-gray-300 hover:bg-gray-300 hover:text-gray-800'}`}>
                                            <span>View Details</span>
                                            <ChevronRight size={16} className="ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Call to Action */}
            <Section className={darkMode ? "bg-dark-800 py-16" : "bg-gray-100 py-16"}>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                        Can't Find What You're Looking For?
                    </h2>
                    <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        We specialize in creating custom solutions tailored to your unique business needs. Let's discuss how we can develop the perfect solution for you.
                    </p>
                    <Link to="/contact">
                        <Button variant="primary" size="lg" className={darkMode ? 'bg-orange-500 hover:bg-orange-600 text-gray-900' : 'bg-orange-500 hover:bg-orange-600 text-white'}>
                            Contact Our Team
                        </Button>
                    </Link>
                </div>
            </Section>
        </div>
    );
};

export default ProductsPage;