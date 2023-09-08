// userContextProvider.js

'use client'
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { toast } from 'react-toastify';
import { getCurrentUser } from '@/services/userService';

export const getdecodedToken = async () => {
    try {
        const userDetails = await getCurrentUser();
        
        return { ...userDetails };
    } catch (error) {
        // Handle the error here or throw it to be caught by the calling component
        
    }
}

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const {user} = await getdecodedToken();
                setUser({ ...user });
            } catch (error) {
                // Handle the error here
            }
        }
        fetchData();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
