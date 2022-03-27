// React
import { createContext, ReactNode } from 'react';

// Types
import { User } from 'firebase/auth';

// Create Context
const UserContext = createContext<User | null>(null);

// Context Provider
interface Props {
  user: User;
  children: ReactNode;
}
export const AuthUserProvider = ({ user, children }: Props) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContext;
