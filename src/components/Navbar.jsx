import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return ( 
      // changes in nav 
    <nav className="bg-[#a5b4fc] p-1 top-0 z-10 fixed w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold flex items-center mb-2 md:mb-0">
          <img src="task.png" width="60px" height="30px" alt="" />
          <p className="ml-2">EazY Task</p>
        </Link>
        <button className="navbar-toggler md:hidden" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav flex space-x-4 md:space-x-6 mt-2 md:mt-0 md:flex-row">
        <li><Link href="/" className="text-white hover:text-blue-100">Home</Link></li>
          <li><Link href="/add-task" className="text-white  hover:text-blue-100">Add Task</Link></li>
          <li><Link href="/about" className="text-white  hover:text-blue-100">About</Link></li>
          <li><Link href="/profile" className="text-white  hover:text-blue-100">Profile</Link></li>
          <li><Link href="#" className="text-white  hover:text-blue-100">Logout</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
