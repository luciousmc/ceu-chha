import { useContext } from 'react';
import RegisterInfoContext from '../context/registerInfo';

export const useRegisterInfoContext = () => {
  const context = useContext(RegisterInfoContext);

  if (!context) {
    throw new Error('This hook must be used within the RegisterInfoProvider');
  } else {
    return context;
  }
};
