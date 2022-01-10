import { User } from 'firebase/auth';
import { ReactNode } from 'react';
import { Route } from 'react-router-dom';

interface Props {
  user: User;
  children: ReactNode;
}

function ProtectedRoute() {}

export default ProtectedRoute;
