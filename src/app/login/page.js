'use client'
import React, { useContext, useState } from 'react';
import { addUser, loginApi } from '@/services/userService';
import { toast } from 'react-toastify';
import { Grid, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import UserContext from '@/context/userContext';

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    try {
      console.log('Form submitted with login data:', formData);
      const result = await loginApi(formData);
      const rem =  context.setUser(result.user);
      console.log(context)

      router.push('/profile');
      toast.success(result.message, {
        position: 'top-left',
        autoClose: 2000,
      });
      console.log('After Login api runs:', result);
      //  setFormData(initialFormData);


    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: 'top-left',
        autoClose: 2000,
      });
    }
  };

  return (
    <div className='fluid-container bg-gradient-to-r from-[#6e8acc] via-[#be95e2] to-[#6e8acc]'>
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
                InputLabelProps={{ shrink: true }}  
                required
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                value={formData.password}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}  
                required
              />
            </Grid>
          </Grid>
          <div className="text-center ">
            <button
              type="submit"
              className="bg-blue-500 mt-5 mb-5 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );


};

export default LoginPage;
