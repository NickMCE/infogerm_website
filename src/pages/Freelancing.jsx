import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

const Freelancing = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-12"
      >
        <h1 className="text-4xl font-bold mb-8">Freelancing Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
            <p className="mb-4">Create stunning websites and web applications for clients worldwide.</p>
            <Button variant="outline">Find Projects</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Mobile App Development</h2>
            <p className="mb-4">Build innovative mobile apps for iOS and Android platforms.</p>
            <Button variant="outline">Find Projects</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Graphic Design</h2>
            <p className="mb-4">Create visually appealing designs for various digital and print media.</p>
            <Button variant="outline">Find Projects</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Content Writing</h2>
            <p className="mb-4">Craft engaging and SEO-friendly content for websites and blogs.</p>
            <Button variant="outline">Find Projects</Button>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Freelancing;