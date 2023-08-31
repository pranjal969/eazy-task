'use client'
import React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#a5b4fc] via-[#ee634a] to-[#a5b4fc] py-12 shadow-xl">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="w-1/2 text-white">
          <h1 className="text-4xl font-bold mb-6">
            Manage Your Tasks with Eazy Task
          </h1>
          <p className="text-lg mb-8">
            Keep track of your tasks, set due dates, and receive reminders.
          </p>
          <div className="mt-8">
            <Button variant="contained" color="primary" className="mr-4">
              Add Task
            </Button>
            <Button variant="contained" color="secondary">
              Set Reminders
            </Button>
          </div>
        </div>
        <div className="w-1/3">
          <Image
            src="/banner.png"
            alt="Eazy Task Banner"
            width={700} // Increase the width
            height={300}
            className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;