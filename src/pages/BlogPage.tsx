import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ChevronRight, Search } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    id: 'ai-revolution-business',
    title: 'The AI Revolution: How Machine Learning is Transforming Business',
    excerpt: 'Explore how artificial intelligence and machine learning are revolutionizing business operations across industries.',
    date: 'May 15, 2025',
    readTime: '7 min read',
    category: 'Artificial Intelligence',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      name: 'Dr. Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  },
  {
    id: 'cloud-migration-strategies',
    title: 'Cloud Migration Strategies for Enterprise Applications',
    excerpt: 'A comprehensive guide to planning and executing successful cloud migrations for large-scale enterprise applications.',
    date: 'April 28, 2025',
    readTime: '10 min read',
    category: 'Cloud Computing',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      name: 'Michael Johnson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  },
  {
    id: 'cybersecurity-trends-2025',
    title: 'Cybersecurity Trends to Watch in 2025',
    excerpt: 'Stay ahead of emerging threats with our analysis of the top cybersecurity trends that will define the landscape in 2025.',
    date: 'April 10, 2025',
    readTime: '8 min read',
    category: 'Cybersecurity',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      name: 'Alexandra Patel',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  },
  {
    id: 'data-analytics-business-growth',
    title: 'Leveraging Data Analytics for Sustainable Business Growth',
    excerpt: 'Discover how data analytics can drive decision-making and foster sustainable growth in today\'s competitive business environment.',
    date: 'March 22, 2025',
    readTime: '6 min read',
    category: 'Data Analytics',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      name: 'David Rodriguez',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  },
  {
    id: 'blockchain-enterprise-applications',
    title: 'Blockchain Beyond Cryptocurrency: Enterprise Applications',
    excerpt: 'Explore real-world enterprise applications of blockchain technology beyond the cryptocurrency space.',
    date: 'March 8, 2025',
    readTime: '9 min read',
    category: 'Blockchain',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      name: 'Emma Thompson',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  },
  {
    id: 'iot-industrial-transformation',
    title: 'IoT and the Industrial Transformation',
    excerpt: 'How the Internet of Things is revolutionizing industrial processes and creating smarter, more efficient operations.',
    date: 'February 15, 2025',
    readTime: '7 min read',
    category: 'IoT',
    image: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      name: 'James Wilson',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  }
];

const categories = [
  'All',
  'Artificial Intelligence',
  'Cloud Computing',
  'Cybersecurity',
  'Data Analytics',
  'Blockchain',
  'IoT'
];

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  useEffect(() => {
    document.title = 'Blog | Basel Dynamics Tech Solutions';
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
            Tech <span className="neon-text">Insights</span> & News
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Stay updated with the latest technology trends, insights, and news from our experts.
          </motion.p>
        </div>
      </Section>
      
      {/* Search and Filter */}
      <Section className="py-8">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-dark-700 border border-dark-500 rounded-md py-3 px-10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-dark-900 shadow-neon'
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full group perspective">
                  <div className="h-full transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">
                    {/* Front of Card */}
                    <div className="flex flex-col h-full backface-hidden">
                      <div className="h-48 rounded-t-lg overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6 flex-grow">
                        <div className="flex items-center justify-between mb-4">
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-dark-600 text-primary-500 rounded-full">
                            {post.category}
                          </span>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Clock size={14} className="mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-heading font-semibold mb-3">{post.title}</h3>
                        <p className="text-gray-400 mb-6">{post.excerpt}</p>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center">
                            <img 
                              src={post.author.avatar} 
                              alt={post.author.name} 
                              className="w-8 h-8 rounded-full mr-2 object-cover"
                            />
                            <span className="text-sm text-gray-300">{post.author.name}</span>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar size={14} className="mr-1" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back of Card */}
                    <div className="absolute inset-0 h-full w-full backface-hidden rotate-y-180 bg-dark-700 p-6 flex flex-col justify-between rounded-lg">
                      <div>
                        <h3 className="text-xl font-heading font-semibold mb-4">{post.title}</h3>
                        <p className="text-gray-400 mb-4">{post.excerpt}</p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar size={14} className="mr-2" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Clock size={14} className="mr-2" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Tag size={14} className="mr-2" />
                            <span>{post.category}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center mb-4">
                          <img 
                            src={post.author.avatar} 
                            alt={post.author.name} 
                            className="w-10 h-10 rounded-full mr-3 object-cover"
                          />
                          <div>
                            <p className="text-white font-medium">{post.author.name}</p>
                            <p className="text-sm text-gray-400">Author</p>
                          </div>
                        </div>
                        <Button variant="primary" className="w-full">
                          <span>Read Full Article</span>
                          <ChevronRight size={16} className="ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-heading font-semibold mb-4">No articles found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search criteria or select a different category.</p>
            <Button variant="outline" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}>
              Reset Filters
            </Button>
          </div>
        )}
        
        {/* Pagination */}
        {filteredPosts.length > 0 && (
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <button className="w-10 h-10 rounded-full bg-primary-500 text-dark-900 flex items-center justify-center font-medium">
                1
              </button>
              <button className="w-10 h-10 rounded-full bg-dark-700 text-gray-300 flex items-center justify-center hover:bg-dark-600">
                2
              </button>
              <button className="w-10 h-10 rounded-full bg-dark-700 text-gray-300 flex items-center justify-center hover:bg-dark-600">
                3
              </button>
              <span className="text-gray-400">...</span>
              <button className="w-10 h-10 rounded-full bg-dark-700 text-gray-300 flex items-center justify-center hover:bg-dark-600">
                8
              </button>
            </div>
          </div>
        )}
      </Section>
      
      {/* Newsletter */}
      <Section className="bg-dark-800 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Subscribe to Our <span className="neon-text">Newsletter</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Stay updated with our latest insights, news, and technology trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-dark-700 border border-dark-500 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Button variant="primary">
              Subscribe
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BlogPage;