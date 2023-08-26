import React from 'react';

const Navbar = () => {
  return ( 
    <nav className="bg-[#a5b4fc] p-1">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <a href="#" className="text-white text-xl font-bold flex items-center mb-2 md:mb-0">
          <img src="task.png" width="60px" height="30px" alt="" />
          <p className="ml-2">EazY Task</p>
        </a>
        <button className="navbar-toggler md:hidden" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav flex space-x-4 md:space-x-6 mt-2 md:mt-0 md:flex-row">
          <li><a href="#" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">About</a></li>
          <li><a href="#" className="text-white">Services</a></li>
          <li><a href="#" className="text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
