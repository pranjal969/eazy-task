'use client'
import { useContext, useEffect, useState } from 'react';
import UserContext from '@/context/userContext';
import { viewTaskByUserId } from '@/services/taskService';
import { toast } from 'react-toastify';

const Page = () => {
  const contextUser = useContext(UserContext);
  const [userData, setUserData] = useState();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setUserData(contextUser?.user);
  }, [contextUser.user]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await viewTaskByUserId(userData?.userId);
        setTasks(result);
        console.log(result);
      } catch (error) {
        console.log(error);
        toast.error("Error getting task", {
          position: 'top-left',
          autoClose: 3000,
        });
      }
    };

    if (userData) {
      fetchData();
    }
  }, [userData]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <div key={task._id} className="bg-white shadow-md rounded-md p-4">
          <div className="font-bold text-lg">{task.title}</div>
          <div className="text-gray-500">{task.description}</div>
          <div className="mt-2">
            <span className="font-semibold">Status: </span>
            {task.status}
          </div>
          <div className="mt-2">
            <span className="font-semibold">Author: </span>
            {task.author}
          </div>
          <div className="mt-2">
            <span className="font-semibold">Category: </span>
            {task.category}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
