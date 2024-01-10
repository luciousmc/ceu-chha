import { createContext, ReactNode } from 'react';
import { User } from 'firebase/auth';

const UserContext = createContext<User | null>(null);
interface Props {
  user: User;
  children: ReactNode;
}
export const AuthUserProvider = ({ user, children }: Props) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContext;
