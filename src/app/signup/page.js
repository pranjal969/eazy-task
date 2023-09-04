'use client'
import React, { useState } from 'react';
import { addUser } from '@/services/userService';
import { toast } from 'react-toastify';
import { Grid, TextField } from '@mui/material';

const initialFormData = {
  name: '',
  email: '',
  password: '',
  about: '',
  profileUrl: '',
  address: {
    street: '',
    city: '',
    pincode: '',
  },
};

const SignupPage = () => {
  const [formData, setFormData] = useState(initialFormData);

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    try {
      console.log('Form submitted with data:', formData);
      const result = await addUser(formData);
      console.log(result);
      toast.success("Signup Successfull", {
        position: 'top-left',
        autoClose: 3000,
      });
      setFormData(initialFormData);
    } catch (error) {
      console.log(error);
      toast.error("Error creating user", {
        position: 'top-left',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className='fluid-container bg-gradient-to-r from-[#6e8acc] via-[#be95e2] to-[#6e8acc]'>

      <div className="flex justify-center items-center ">
        <form onSubmit={handleSubmit} className="w-full max-w-4xl mt-5 p-4 pb-15 ml-2 mr-2  rounded shadow-md bg-[#e5e9f1] mb-4 ">
          <div className='flex justify-center mb-2' >
            <img style={{ borderRadius: '50%' }}
              src="/signup.svg" width={"100px"} height={"100px"} alt="" />
          </div>

          <h2 className="text-2xl font-semibold mb-2  flex justify-center">Sign Up</h2>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Name"
                name="name"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Email"
                name="email"
                type='email'
                fullWidth
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                value={formData.password}
                onChange={handleChange}
                autoComplete='off'
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Profile Url"
                name="profileUrl"
                fullWidth
                value={formData.profileUrl}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="About"
                name="about"
                fullWidth
                value={formData.about}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Street Address"
                name="address.street"
                fullWidth
                value={formData.address.street}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="City"
                name="address.city"
                fullWidth
                value={formData.address.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Pincode"
                name="address.pincode"
                fullWidth
                value={formData.address.pincode}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <div className="text-center ">
            <button
              type="submit"
              className="bg-blue-500 mt-5 mb-5 text-white px-4 py-2 rounded-md hover:bg-blue-600"
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
