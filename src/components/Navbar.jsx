'use client'

import UserContext from '@/context/userContext';
import { logoutApi } from '@/services/userService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
const Navbar = () => {
  const contextUser = useContext(UserContext);
  const [userData, setUserData] = useState();

  useEffect(() => {
    setUserData(contextUser.user);
    console.log("first", contextUser);
  }, [contextUser.user]);

  
  const router = useRouter();
 
  const logout = async (e) => {
    e.preventDefault();
    try {
      const result = await logoutApi();
      console.log(result)
      contextUser.setUser(undefined);
      router.push("/login")
      toast.success("Logout Success", {
        position: 'top-left',
        autoClose: 2000,
      });

    } catch (error) {
      const temp = await contextUser.setUser(undefined);
      console.log(temp);
      console.log(error);
      toast.error("Error in logout !!", {
        position: 'top-left',
        autoClose: 2000,
      })
    }
  }
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
          {userData && (
            <>
              <li className="transform hover:scale-105">
                <Link href="/show-task" className="text-white text-md py-1 px-2 rounded-lg shadow-md transition duration-300 ease-in-out">
                  View Task
                </Link>
              </li>
              <li className="transform hover:scale-105">
                <Link href="/add-task" style={{ whiteSpace: 'nowrap' }} className="text-white text-md py-1 px-2 rounded-lg shadow-md transition duration-300 ease-in-out">
                  Add Task
                </Link>
              </li>
              <li className="transform hover:scale-105">
                <Link href="/profile" className="text-white text-md py-1 px-2 rounded-lg shadow-md transition duration-300 ease-in-out">
                  Profile
                </Link>
              </li>
              <li className="transform hover:scale-105 ">
                <button onClick={logout} className="text-white text-md pb-1 px-2 rounded-lg shadow-md transition duration-300 ease-in-out">
                  Logout
                </button>
              </li>
              <li>
              </li>
            </>
          )}
          {!userData && (
            <>
              <li className="transform hover:scale-105">
                <Link href="/login" className="text-white text-md py-1 px-2 rounded-lg shadow-md transition duration-300 ease-in-out">
                  Login
                </Link>
              </li>
              <li className="transform hover:scale-105">
                <Link href="/signup" className="text-white text-md py-1 px-2 rounded-lg shadow-md transition duration-300 ease-in-out">
                  Signup
                </Link>
              </li>

            </>
          )}
        </ul>
      </div>
    </nav>

  );
};

export default Navbar;
