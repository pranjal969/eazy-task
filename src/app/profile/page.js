'use client'
import React, { useContext, useState, useEffect } from 'react';
import UserContext from '@/context/userContext';
import { toast } from 'react-toastify';
import { updateUser } from '@/services/userService';

const ProfilePage = () => {
  const contextUser = useContext(UserContext);
  const [userData, setUserData] = useState(contextUser?.user);
  const [isEditing, setIsEditing] = useState(false);


  useEffect(() => {
    setUserData(contextUser.user);
    console.log("first", contextUser);
  }, [contextUser.user]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    // Assuming you have a function to save the edited user data
    // Replace this with your actual save logic
    try {
      // Save the edited userData here
      // Example: saveUserData(userData);
      console.log(userData);
      const updatedUser = await updateUser({ name: userData?.name, email: userData?.email }, userData?.userId)
      console.log("profile after updating ", updatedUser)
      toast.success("Profile saved successfully", {
        position: 'top-left',
        autoClose: 3000,
      });
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      toast.error("Error saving profile", {
        position: 'top-left',
        autoClose: 3000,
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="bg-gradient-to-r from-[#a5b4fc] via-[#2c44bb] to-[#e77561] min-h-screen flex flex-col justify-center items-center p-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <div className="text-center mb-4">
          <img
            src="/working.png"
            alt="Profile Image"
            className="rounded-full mx-auto mb-2"
            width={"100px"}
            height={"100px"}
          />
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={userData?.name}
              onChange={handleInputChange}
              className="border-2 border-gray-300 rounded-md p-2 w-full"
            />
          ) : (
            <div className="text-2xl font-semibold">{userData?.name || ' '}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="font-semibold">Email:</label>
          {isEditing ? (
            <input
              type="text"
              name="email"
              value={userData?.email}
              onChange={handleInputChange}
              className="border-2 border-gray-300 rounded-md p-2 w-full"
            />
          ) : (
            <div>{userData?.email || ' '}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="font-semibold">User ID:</label>
          {isEditing ? (
            <input
              type="text"
              name="userId"
              value={userData?.userId || ' '}
              disabled
              onChange={handleInputChange}
              className="border-2 border-gray-300 rounded-md p-2 w-full"
            />
          ) : (
            <div>{userData?.userId || ' '}</div>
          )}
        </div>
        {isEditing ? (
          <div className="text-center">
            <button
              onClick={handleSaveClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="text-center">
            <button
              onClick={handleEditClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
