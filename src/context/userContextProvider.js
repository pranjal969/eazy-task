'use client'
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { toast } from 'react-toastify';
import { getCurrentUser } from '@/services/userService';

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        async function getdecodedToken() {
            try {
                const userDetails = await getCurrentUser();
                setUser({ ...userDetails });
 
            } catch (error) {
                console.log(error);
               // toast.error("Error validating token")
            }
        }
        getdecodedToken();
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider