import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link></li>
            <li><Link to="/internships" className="text-gray-800 hover:text-blue-600">Internships</Link></li>
            <li><Link to="/freelancing" className="text-gray-800 hover:text-blue-600">Freelancing Services</Link></li>
            <li><Link to="/education" className="text-gray-800 hover:text-blue-600">Online Education</Link></li>
            <li><Link to="/products" className="text-gray-800 hover:text-blue-600">Products</Link></li>
            <li><Link to="/about" className="text-gray-800 hover:text-blue-600">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-800 hover:text-blue-600">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">InfoGerm</h3>
              <p>Empowering careers through technology and education.</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
              <ul>
                <li><Link to="/internships" className="hover:text-blue-400">Internships</Link></li>
                <li><Link to="/freelancing" className="hover:text-blue-400">Freelancing</Link></li>
                <li><Link to="/education" className="hover:text-blue-400">Education</Link></li>
                <li><Link to="/products" className="hover:text-blue-400">Products</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p>Email: snikhil6295@gmail.com</p>
              <p>Phone: +91 636 951 0662</p>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-400"><Facebook /></a>
                <a href="#" className="text-white hover:text-blue-400"><Twitter /></a>
                <a href="https://www.instagram.com/infogerm/" className="text-white hover:text-blue-400" target='_blank'><Instagram /></a>
                <a href="https://www.linkedin.com/company/infogerm/" className="text-white hover:text-blue-400" target='_blank'><Linkedin /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 InfoGerm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;