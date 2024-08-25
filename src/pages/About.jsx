import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-12"
      >
        <h1 className="text-4xl font-bold mb-8">About InfoGerm</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg mb-6">
            InfoGerm is a leading platform dedicated to empowering aspiring professionals in the tech industry. We offer a wide range of internships, freelancing opportunities, and educational resources to help individuals kickstart their careers and enhance their skills.
          </p>
          <p className="text-lg mb-6">
            Our mission is to bridge the gap between education and industry by providing hands-on experience and practical knowledge. We collaborate with top companies and experienced mentors to ensure that our participants receive the best guidance and opportunities.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Innovation and continuous learning</li>
            <li>Quality and excellence in all we do</li>
            <li>Inclusivity and diversity</li>
            <li>Empowering the next generation of tech professionals</li>
          </ul>
          <p className="text-lg">
            Join us on this exciting journey of growth and discovery in the world of technology!
          </p>
        </div>
      </motion.div>
    </Layout>
  );
};

export default About;