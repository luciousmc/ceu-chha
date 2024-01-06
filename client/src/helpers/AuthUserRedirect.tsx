import { ReactNode, useContext } from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';
import UserContext from '../context/userContext';

interface AuthUserRedirectProps {
  children: ReactNode;
  redirectPath: string;
}

function AuthUserRedirect({ children, redirectPath }: AuthUserRedirectProps) {
  const user = useContext(UserContext);
  const location = useLocation();

  if (!user) {
    return children;
  }
  return <Navigate to={redirectPath} state={{ from: location }} replace />;
}

export default AuthUserRedirect;
