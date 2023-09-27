'use client'
import { useContext, useEffect, useState } from 'react';
import UserContext from '@/context/userContext';
import { deleteTaskById, viewTaskByUserId } from '@/services/taskService';
import { toast } from 'react-toastify';
import { AiOutlineClose } from 'react-icons/ai';
import NoTasksMessage from '@/components/NoTasksMessage';

const Page = () => {
  const contextUser = useContext(UserContext);
  const [userData, setUserData] = useState();
  const [tasks, setTasks] = useState([]);
  contextUser.setLoading(false);
  const handleDelete = async (taskId) => {
    try {
      let c = 0;
      console.log(c);
      c = c + 1;
      await deleteTaskById(taskId);
      const updatedTasks = tasks.filter((task) => task._id !== taskId); // Filter tasks correctly
      setTasks(updatedTasks);
      toast.success("Task deleted ", {
        position: 'top-left',
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Error deleting task", {
        position: 'top-left',
        autoClose: 2000,
      });
    }
  }


  useEffect(() => {
    setUserData(contextUser?.user);
  }, [contextUser.user]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await viewTaskByUserId(userData?.userId);
        setTasks(result);
      } catch (error) {
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
    <div className='bg-[#b4b9cf]  min-h-screen'>

      {
        tasks.length === 0 ? (<div className='  '> <NoTasksMessage /> </div>) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
            {tasks.map((task) => (
              <div key={task._id} className={`${task.status === "Completed"
                ? "bg-gradient-to-r from-[#a5b4fc] via-[#8dbd83] to-[#0ebe51]"
                : "bg-gradient-to-r from-[#a5b4fc] via-[#d36174] to-[#f05236]"
                } shadow-md rounded-md p-4 mx-6 my-6`}>

                <div className='flex justify-between'>
                  <div className="font-bold text-lg">{task.title}</div>
                  <span onClick={() => handleDelete(task._id)} className='bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer hover:bg-slate-400'>
                    <AiOutlineClose />
                  </span>
                </div>
                <div className="text-gray-600 font-semibold">{task.description}</div>
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
        )
      }
    </div>
  );
};

export default Page;
