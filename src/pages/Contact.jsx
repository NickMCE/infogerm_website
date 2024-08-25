import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const Contact = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-12"
      >
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <Input type="text" id="name" name="name" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <Input type="email" id="email" name="email" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <Textarea id="message" name="message" rows="4" required />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-2"><strong>Address:</strong> Chennai, Tamil Nadu, India</p>
            <p className="mb-2"><strong>Email:</strong> info@infogerm.com</p>
            <p className="mb-2"><strong>Phone:</strong> +91 636 951 0662</p>
            <h3 className="text-xl font-semibold mt-6 mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-600">Facebook</a>
              <a href="#" className="text-blue-400 hover:text-blue-500">Twitter</a>
              <a href="https://www.instagram.com/infogerm/" className="text-pink-500 hover:text-pink-600" target='_blank'>Instagram</a>
              <a href="https://www.linkedin.com/company/infogerm/" className="text-blue-700 hover:text-blue-800" target='_blank'>LinkedIn</a>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Contact;