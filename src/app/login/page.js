'use client'
import React, { useContext, useState } from 'react';
import { addUser, loginApi } from '@/services/userService';
import { toast } from 'react-toastify';
import { Grid, TextField, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import UserContext from '@/context/userContext';
import {getdecodedToken} from '@/context/userContextProvider'

const initialFormData = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const context = useContext(UserContext);
  
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };

  const callGetdecodedToken = async () => {
    try {
      const {user}  = await getdecodedToken(); // Assuming getdecodedToken is in scope
      context.setUser(user);
    } catch (error) {
      // Handle the error here
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      context.setLoading(true); // Set loading to true when the button is clicked

      const result = await loginApi(formData);
      await callGetdecodedToken();
      router.push('/show-task');
      // toast.success(result.message, {
      //   position: 'top-left',
      //   autoClose: 2000,
      // });
      // Clear the form data if needed: setFormData(initialFormData);
    } catch (error) {
      toast.error(error.response.data.message, {
        position: 'top-left',
        autoClose: 2000,
      });
      context.setLoading(false);
    } 
  };

  return (
    <div className='fluid-container bg-gradient-to-r from-[#6e8acc] via-[#be95e2] to-[#6e8acc]  min-h-screen'>
      <div className="flex justify-center items-center ">
        <form onSubmit={handleSubmit} className="w-full max-w-lg mt-16 mb-16 p-16 pb-15 ml-2 mr-2  rounded shadow-md bg-[#e5e9f1] ">
          <div className='flex justify-center mb-2' >
            <img style={{ borderRadius: '50%' }}
              src="/signup.svg" width={"100px"} height={"100px"} alt="" />
          </div>

          <h2 className="text-2xl font-semibold mb-2  flex justify-center">Login</h2>

          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                label="Email"
                name="email"
                type='email'
                fullWidth
                value={formData.email}
                onChange={handleChange}
                autoComplete='true'
                InputLabelProps={{ shrink: true }}  
                required
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                label="Password"
                name="password"
                type="password"
                autoComplete='true'
                fullWidth
                value={formData.password}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}  
                required
              />
            </Grid>
          </Grid>
          <div className="text-center">
            {context.loading ? ( // Show loader while loading is true
             <div className='mt-4'> <CircularProgress size={28} thickness={6} color="primary" /> </div>
            ) : (
              <button
                type="submit"
                className="bg-blue-500 mt-5 mb-5 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Login
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );


};

export default LoginPage;
