'use client'

import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 

const Testimonials = () => {
  // Dummy testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      avatar: '/user.png', // Replace with the actual image URL
      content:
        'Eazy Task has transformed the way I manage my tasks. It\'s incredibly user-friendly and has improved my productivity significantly.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: '/user.png', // Replace with the actual image URL
      content:
        'I love Eazy Task! It has all the features I need to stay organized and on top of my tasks. Highly recommended!',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      avatar: '/user.png', // Replace with the actual image URL
      content:
        'The reminders feature in Eazy Task is a game-changer. It ensures I never miss a deadline, and the interface is delightful to use.',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#a5b4fc] via-[#9b63cd] to-[#a5b4fc] py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-white font-semibold mb-6">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
