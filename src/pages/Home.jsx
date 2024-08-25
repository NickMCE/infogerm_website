import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Carousel } from '../components/Carousel';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const images = [
    '/src/assests/_f353984c-9151-4241-8328-0baf1fa0ee8c.jpg',
    '/src/assests/virtual-internship.png',
    '/src/assests/The-Advantages-and-Disadvantages-of-Online-Classes-for-Higher-Education-banner.jpg',
  ];

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Carousel images={images} />
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold mb-6 text-center">Welcome to InfoGerm</h1>
          <p className="text-xl mb-8 text-center max-w-2xl mx-auto">Empowering your career through internships, freelancing, and education. Join us to unlock your potential in the world of technology.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold mb-4">Internships</h2>
              <p className="mb-4">Gain practical experience and kickstart your career with our diverse internship opportunities.</p>
              <Button variant="outline">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold mb-4">Freelancing</h2>
              <p className="mb-4">Find exciting projects and work on your own terms with our freelancing platform.</p>
              <Button variant="outline">Explore <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold mb-4">Online Education</h2>
              <p className="mb-4">Learn new skills and advance your knowledge with our comprehensive online courses.</p>
              <Button variant="outline">Start Learning <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </div>
          </div>
          <div className="text-center">
            <Button size="lg">Get Started Today</Button>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Home;