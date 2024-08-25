import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

const Internships = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-12"
      >
        <h1 className="text-4xl font-bold mb-8">Virtual Internship Domains</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/src/assests/Web-Development.jpg" alt="Web Development" className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-2xl font-semibold mb-2">Web Development</h2>
            <p className="mb-4">Gain practical experience in crafting and enhancing web-based systems.</p>
            <Button>Apply</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/src/assests/python-developer.png" alt="Android Development" className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-2xl font-semibold mb-2">Python Development</h2>
            <p className="mb-4">Create innovative mobile applications for the Android platform.</p>
            <Button>Apply</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/src/assests/Data Science 1600x800.jpg" alt="Data Science" className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-2xl font-semibold mb-2">Data Science</h2>
            <p className="mb-4">Analyze complex data sets and gain insights in a virtual work environment.</p>
            <Button>Apply</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/src/assests/Le9zsr8bQmv7gmZW40UXiVaPsGcpVwaY65mw28tU.webp" alt="Artificial Intelligence" className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-2xl font-semibold mb-2">Artificial Intelligence</h2>
            <p className="mb-4">Create AI models and chatbots.</p>
            <Button>Apply</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/src/assests/Model-Data-Analytics.jpg" alt="Data Analytics" className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-2xl font-semibold mb-2">Data Analytics</h2>
            <p className="mb-4">Analyze complex data sets and gain insights in a virtual work environment.</p>
            <Button>Apply</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/src/assests/1_fOdb_ET1sOd4uZStK4E8HA.jpg" alt="Java Development" className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-2xl font-semibold mb-2">Java Development</h2>
            <p className="mb-4">Develop and maintain Java-based applications and systems.</p>
            <Button>Apply</Button>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Internships;
