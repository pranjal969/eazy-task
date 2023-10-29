'use client'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import enGB from 'date-fns/locale/en-GB';
import Typography from '@mui/material/Typography';

import 'date-fns';

const DOB = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(new Date()); // Set the default end date to today's date
    const [result, setResult] = useState('');
    const calculateDateDifference = () => {
        if (!startDate || !endDate) {
            return { years: 0, months: 0, days: 0 };
        }

        const timeDifference = Math.abs(endDate - startDate);
        const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
        const months = Math.floor((timeDifference % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
        const days = Math.floor((timeDifference % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

        return { years, months, days };
    };

    const handleCalculate = () => {
        const { years, months, days } = calculateDateDifference();
        setEndDate(new Date()); // Reset the end date to today's date
        //  alert(`Years: ${years}, Months: ${months}, Days: ${days}`);
    };

    return (
        <div className="bg-gradient-to-r from-[#6e8acc] via-[#be95e2] to-[#6e8acc]  min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg w-100 mx-4">
                <h2 className="text-2xl font-semibold mb-4">Date Calculator</h2>
                <div className="mb-4 flex items-center justify-center">
                    <label className="block text-sm font-medium text-gray-700 mx-2">Start Date:</label>
                    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB}>
                        <DesktopDatePicker
                            value={startDate}
                            onChange={(date) => setStartDate(date)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
                <div className="mb-4 flex items-center justify-center">
                    <label className="block text-sm font-medium text-gray-700 mx-3">End Date:</label>
                    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB}>
                        <DesktopDatePicker
                            value={endDate}
                            onChange={(date) => setEndDate(date)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
                <button
                    onClick={handleCalculate}
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold rounded-md py-2"
                >
                    Calculate
                </button>
                {startDate && endDate && (
                    <Typography variant="body1" className='flex text-center justify-center mt-4'>
                        {calculateDateDifference().years} Years,  {calculateDateDifference().months} Months,  {calculateDateDifference().days} Days
                    </Typography>
                )}
            </div>
        </div>
    );
}

export default DOB;