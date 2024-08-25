import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

const Products = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-12"
      >
        <h1 className="text-4xl font-bold mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/company-website.jpg" alt="Company Website Template" className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-2xl font-semibold mb-2">Company Website Template</h2>
            <p className="mb-4">Professional and customizable template for business websites.</p>
            <Button variant="outline">Learn More</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/blog-website.jpg" alt="Blog Website Template" className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-2xl font-semibold mb-2">Blog Website Template</h2>
            <p className="mb-4">Sleek and responsive template for content-rich blog websites.</p>
            <Button variant="outline">Learn More</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/hospital-website.jpg" alt="Hospital Website Template" className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-2xl font-semibold mb-2">Hospital Website Template</h2>
            <p className="mb-4">Comprehensive template for healthcare and medical websites.</p>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Products;