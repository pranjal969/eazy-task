'use client'
import React, { useState } from 'react';
import {  TextField } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


const WorkingHourCalculator = () => {
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [result, setResult] = useState('');
    const [error, setError] = useState('');
  
    const calculateWorkingHours = () => {
      if (startTime > endTime) {
        setError('Start time cannot be greater than end time');
        setResult('');
      } else {
        setError('');
        const diffInMilliseconds = endTime - startTime;
        const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
        const minutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
        setResult(`Total working hours: ${hours} hours and ${minutes} minutes`);
      }
    };
  
    const getCurrentTime = () => {
      return new Date();
    };
  
    useState(() => {
      setEndTime(getCurrentTime());
    });
  
    return (
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Working Hour Calculator</h1>
          <div className="mb-4 flex items-center justify-center">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="Start Time"
                ampm
                value={startTime}
                onChange={(newTime) => setStartTime(newTime)}
                renderInput={(params) => <TextField {...params} variant="outlined" fullWidth />}
              />
            </LocalizationProvider>
          </div>
          <div className="mb-4 flex items-center justify-center">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="End Time"
                ampm
                value={endTime}
                onChange={(newTime) => setEndTime(newTime)}
                renderInput={(params) => <TextField {...params} variant="outlined" fullWidth />}
              />
            </LocalizationProvider>
          </div>
          <button
            onClick={calculateWorkingHours}
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold rounded-md py-2"
          >
            Calculate
          </button>
          {error && <div className="text-red-500 mt-2">{error}</div>}
          <div className="mt-4">{result}</div>
        </div>
      </div>
    );
  };
  
  export default WorkingHourCalculator;