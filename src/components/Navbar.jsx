import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#a5b4fc] via-[#2c44bb] to-[#e77561] p-1 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-white text-3xl font-bold flex items-center mb-2 md:mb-0">
          <img src="task.png" width="60px" height="30px" alt="" />
          <p className="ml-2">EazY Task</p>
        </Link>
        <button className="navbar-toggler md:hidden" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav flex space-x-2 md:space-x-2 mt-2 md:mt-0 md:flex-row">
          <li className="transform hover:scale-105">
            <Link href="/" className="text-white text-md py-1 px-2 rounded-lg shadow-md transition duration-300 ease-in-out">
              Home
            </Link>
          </li>
          <li className="transform hover:scale-105">
            <Link href="/add-task"  style={{ whiteSpace: 'nowrap' }} className="text-white text-md py-1 px-2 rounded-lg shadow-md transition duration-300 ease-in-out">
              Add Task
            </Link>
          </li>
          <li className="transform hover:scale-105">
            <Link href="/signup" className="text-white text-md py-1 px-2 rounded-lg shadow-md transition duration-300 ease-in-out">
              Signup
            </Link>
          </li>
          <li className="transform hover:scale-105">
            <Link href="/profile" className="text-white text-md py-1 px-2 rounded-lg shadow-md transition duration-300 ease-in-out">
              Profile
            </Link>
          </li>
          {/* <li className="transform hover:scale-105">
            <Link href="#" className="text-white text-md py-1 px-2 rounded-lg shadow-md transition duration-300 ease-in-out">
              Logout
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>

  );
};

export default Navbar;
