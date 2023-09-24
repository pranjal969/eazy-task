'use client'
import { useContext, useEffect, useState } from 'react';
import UserContext from '@/context/userContext';

function userContextHelper() {
  const contextUser = useContext(UserContext);
  const [userData, setUserData] = useState();

  useEffect(() => {
    setUserData(contextUser.user);
    console.log("first", contextUser);
  }, [contextUser.user]);

  return userData?.user;
}

export default userContextHelper;