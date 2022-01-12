// React
import { createContext, ReactNode } from 'react';

// Types
import { UseRegisterInfoType } from '../types/useRegisterInfo';
import { studentInfoType } from '../types/studentInfo';

// Hooks
import useRegisterInfo from '../hooks/useRegisterInfo';

// Create Context
const RegisterInfoContext = createContext<UseRegisterInfoType | null>(null);

// Context Provider
export const RegisterInfoProvider = ({ children }: { children: ReactNode }) => {
  return (
    <RegisterInfoContext.Provider
      value={useRegisterInfo({} as studentInfoType)}
    >
      {children}
    </RegisterInfoContext.Provider>
  );
};

export default RegisterInfoContext;
