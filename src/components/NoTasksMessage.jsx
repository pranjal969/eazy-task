import React from 'react';
import { useRouter } from 'next/navigation';

const NoTasksMessage = () => {
  const router = useRouter();

  const handleAddTaskClick = () => {
    // Redirect to the "Add Task" page
    router.push('/add-task'); // Replace '/add-task' with the actual route
  };

  return (
    <div className="text-center">
      <div className="mx-2 md:mx-8 lg:mx-20 pt-20 md:pt-40">
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">No task added</p>
          <p className="text-lg md:text-xl lg:text-2xl mb-4">Click the button below to add a new task.</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-lg md:text-xl lg:text-2xl"
            onClick={handleAddTaskClick}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoTasksMessage;
