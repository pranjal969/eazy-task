'use client'
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { toast } from 'react-toastify';
import { getCurrentUser } from '@/services/userService';

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        async function getdecodedToken() {
            try {
                const user = await getCurrentUser();
                setUser({ ...user });
                console.log(user);
            } catch (error) {
                console.log(error);
                toast.error("Error validating token")
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