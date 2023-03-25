import { useEffect, useState } from 'react';
import useAuthListener from './useAuthListener';

function useGetUserInfo() {
  const [userInfo, setUserInfo] = useState();
  const { user } = useAuthListener();

  useEffect(() => {
    const getuserInfo = async () => {
      const result = await fetch(`localhost:5001/api/students/${user?.uid}`);
    };
  });
}
