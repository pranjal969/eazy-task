'use client'
import { useContext, useEffect, useState } from 'react';
import UserContext from '@/context/userContext';
import { viewTaskByUserId } from '@/services/taskService';
import { toast } from 'react-toastify';
const page = () => {
    const contextUser = useContext(UserContext);
    const [userData, setUserData] = useState();
   
    useEffect(() => {
      setUserData(contextUser?.user);
  
    }, [contextUser.user]);

const fetchData= async ()=>{
    console.log(userData)
    try {
        const result =await viewTaskByUserId (userData?.userId);
        toast.success("Task fetched", {
          position: 'top-left',
          autoClose: 3000,
        });
        console.log(result)
      } catch (error) {
        console.log(error)
        toast.error("Error getting task", {
          position: 'top-left',
          autoClose: 3000,
        });
      }
}



  return (


    <div>page


        <button onClick={fetchData}> Click me</button>
    </div>
  )
}

export default page