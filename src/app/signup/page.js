'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { addUser } from '@/services/userService';


const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    about: '',
    profileUrl: '',
    address: {
      street: '',
      city: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      // Handle nested fields by splitting the name and updating the state accordingly
      const [fieldName, nestedField] = name.split('.');
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: {
          ...prevData[fieldName],
          [nestedField]: value,
        },
      }));
    } else {
      // Handle non-nested fields
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleSubmit =async (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted with data:', formData);

    const result =await addUser(formData);
    console.log(result);
    // You can send the form data to your server or perform any other actions.
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-2/4">

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: "10px" }}>
          <Image style={{ borderRadius: '50% ' }} src="/signup.svg" alt="Signup" width={120} height={130} layout="fixed" />
        </div>

        <h2 className="text-2xl font-semibold mb-4  text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex justify-between">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 p-2"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                className="w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 p-2"
                required
              />
            </div>
          </div>
          <div className="mb-4 flex justify-between">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 p-2"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-600">About</label>
              <input
                name="about"
                value={formData.about}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 p-2"
              ></input>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Profile URL</label>
            <input
            type="text"
              name="profileUrl"
              value={formData.profileUrl}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 p-2"
            />
          </div>
          <div className="mb-4 flex justify-between">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-600">Street Address</label>
              <input
                type="text"
                name="address.street"
                value={formData.address.street}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 p-2"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-600">City</label>
              <input
                type="text"
                name="address.city"
                value={formData.address.city}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 p-2"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
