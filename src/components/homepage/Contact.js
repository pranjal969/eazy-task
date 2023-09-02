'use client'
import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-r from-[#a5b4fc] via-[#2c44bb] to-[#e77561] py-12">
      <div className="container mx-auto">
        <div className="text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg mb-8">Feel free to get in touch with us for any questions or inquiries.</p>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg text-white mb-2">Name</label>
              <input type="text" id="name" className="w-full p-2 rounded-lg bg-white" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg text-white mb-2">Email</label>
              <input type="email" id="email" className="w-full p-2 rounded-lg bg-white" placeholder="Your Email" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg text-white mb-2">Message</label>
              <textarea id="message" className="w-full p-2 rounded-lg bg-white" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
