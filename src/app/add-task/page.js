'use client'

import React, { useState } from 'react';
import { TextField, Grid, Button } from '@mui/material';

const initialFormData = {
  title: 'My Task',
  description: 'Complete my task by 8 pm',
  status: 'Completed',
  author: 'Pranjal',
  category: 'N/A',
  userId: '64e5dd57f067a1cfd91e09c1',
};

const AddTaskPage = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add Task</h2>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Title"
              name="title"
              fullWidth
              value={formData.title}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Description"
              name="description"
              fullWidth
              value={formData.description}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Status"
              name="status"
              fullWidth
              value={formData.status}
              onChange={handleChange}
              margin="normal"
            />
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
              value={formData.userId}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
        </Grid>
        <Button  className="bg-blue-500 hover:bg-blue-600 text-white" type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddTaskPage;
