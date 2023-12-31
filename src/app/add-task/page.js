'use client'

import { useContext, useEffect, useState } from 'react';
import UserContext from '@/context/userContext';
import { TextField, Grid, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { addTask } from '@/services/taskService';
import { toast } from 'react-toastify';


const initialFormData = {
  title: '',
  description: '',
  status: '',
  author: '',
  category: '',
  userId: '',
};


const AddTaskPage = ({ user }) => {
  const [formData, setFormData] = useState(initialFormData);
  const contextUser = useContext(UserContext);
  const [userData, setUserData] = useState();

  useEffect(() => {
    setUserData(contextUser.user);
  }, [contextUser.user]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    // Add validations over here

    try {
     formData.userId=userData.userId;
      const result = await addTask(formData);
      toast.success("Task added successfully", {
        position: 'top-left',
        autoClose: 3000,
      });
      setFormData(initialFormData);
    } catch (error) {
      toast.error("Error adding task", {
        position: 'top-left',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className='fluid-container bg-gradient-to-r from-[#6e8acc] via-[#be95e2] to-[#6e8acc]  min-h-screen'>
      <div className="flex justify-center items-center ">
        <form onSubmit={handleSubmit} className="w-full ml-2 mr-2  max-w-4xl mt-5 p-4 rounded shadow-md bg-[#e5e9f1] mb-4 ">
          <div className='flex justify-center mt-4'>
            <img src="/task.png" width={"80px"} height={"80px"} alt="" />
          </div>
          <h2 className="text-2xl font-semibold mb-2 flex justify-center">Add Task</h2>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Title"
                name="title"
                fullWidth
                value={formData.title}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                name="description"
                fullWidth
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid className='margin-custom' item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  label="Status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <MenuItem value="Select Status" disabled>Select Status</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Author"
                name="author"
                fullWidth
                value={formData.author}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Category"
                name="category"
                fullWidth
                value={formData.category}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="User ID"
                name="userId"
                fullWidth
                value={userData?.userId || ' '}
                margin="normal"
                disabled
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
          <div className="text-center mt-5 px-4 py-2">
            {userData?.userId && <>  <button
              type="submit"
              className="bg-blue-500  text-white px-4 py-2  rounded-md hover:bg-blue-600"
            >
              Add task
            </button></>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskPage;



