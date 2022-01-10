import { User } from 'firebase/auth';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

interface Props {
  user: User;
  children: ReactNode;
}

function ProtectedRoute({ user, children }: Props) {
  const location = useLocation();

  if (!user) {
    return <Navigate to={ROUTES.HOME} state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;
