// React
import { useContext } from 'react';

// React Router
import { Navigate, useLocation } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

// Context
import UserContext from '../context/userContext';

interface Props {
  children: JSX.Element;
}

function ProtectedRoute({ children }: Props) {
  const location = useLocation();
  const user = useContext(UserContext);

  if (!user) {
    return <Navigate to={ROUTES.HOME} state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;
