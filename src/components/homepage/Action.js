'use client'

import React from 'react';

const ActionSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#a5b4fc] via-[#9b63cd] to-[#a5b4fc] text-white pt-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Ready to Get Started?</h2>
        <p className="text-lg mb-8">
          Join Eazy Task today and supercharge your productivity!
        </p>
        <div className="flex justify-center">
          <a
            href="/signup" // Replace with the actual signup page URL
            className="bg-[#ff4b2b] hover:bg-[#e83e0a] text-white font-semibold py-3 px-6 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </a>
        </div>
      </div>
    </section>
  );
};

export default ActionSection;
