'use client'
import React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Banner = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/add-task');
  };
  return (
    <div className="bg-gradient-to-r from-[#a5b4fc] via-[#ee634a] to-[#a5b4fc] py-12 shadow-xl">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="w-4/5 text-white">
          <h1 className="text-4xl font-bold  mb-6 " >
            Manage Your Tasks with Eazy Task
          </h1>
          <p className="text-lg mb-8" >
            Keep track of your tasks, set due dates, and receive reminders.
          </p>
          <div className="mt-8">
            <Button onClick={handleButtonClick}
              variant="contained" color="secondary" className="custrmr">
              Add Task
            </Button>
            <Button onClick={handleButtonClick}
              style={{ whiteSpace: 'nowrap' }} variant="contained" color="secondary" className='cstmd'>
              Set Reminders
            </Button>
          </div>
        </div>
        <div className="w-1/3">
          <div >
            <Link href="/add-task" className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">

              <Image
                src="/banner.png"
                alt="Eazy Task Banner"
                width={700}
                height={300}
                className="rounded-lg hidden md:block"
              />
            </Link>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Banner;