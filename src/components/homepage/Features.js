import React from 'react';
import { FaTasks, FaClock, FaCheckCircle } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="pr-2 pl-2  bg-gradient-to-r from-[#7991d1] via-[#a5b4fc] to-[#ee634a] py-16 shadow-xl"> {/* Set your desired background color */}
      <div className="container mx-auto text-center ">
        <h2 className="text-3xl font-semibold mb-6 text-white">Key Features</h2> {/* Set text color to white */}
        <div className="ml-2 mr-2 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-12">
          {/* Feature 1 */}
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-blue-500 p-3 text-white">
              <FaTasks className="text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Task Management</h3>
              <p className="text-gray-600">
                Easily manage your tasks and stay organized.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-blue-500 p-3 text-white">
              <FaClock className="text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Set Due Dates</h3>
              <p className="text-gray-600">
                Set due dates to keep track of deadlines.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-blue-500 p-3 text-white">
              <FaCheckCircle className="text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Task Completion</h3>
              <p className="text-gray-600">
                Mark tasks as complete and track your progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
