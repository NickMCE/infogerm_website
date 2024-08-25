import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

const Education = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-12"
      >
        <h1 className="text-4xl font-bold mb-8">Online Education</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Web Development Bootcamp</h2>
            <p className="mb-4">Master the latest web technologies and frameworks.</p>
            <Button>Enroll Now</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Data Science Fundamentals</h2>
            <p className="mb-4">Learn the basics of data analysis and machine learning.</p>
            <Button>Enroll Now</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">UX/UI Design Essentials</h2>
            <p className="mb-4">Create user-friendly interfaces and improve user experiences.</p>
            <Button>Enroll Now</Button>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Education;