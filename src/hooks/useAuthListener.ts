import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../lib/firebase';

export default function useAuthListener() {
  const [user, setUser] = useState<User | null>(
    JSON.parse(localStorage.getItem('authUser')!)
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { user };
}
