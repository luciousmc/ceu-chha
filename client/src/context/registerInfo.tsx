import { createContext } from 'react';
import type { ReactNode } from 'react';
import type { UseRegisterInfoType } from '../types/registerInfo';
import type { StudentInfoType } from '../types/studentInfo';
import useRegisterInfo from '../hooks/useRegisterInfo';

const RegisterInfoContext = createContext<UseRegisterInfoType | null>(null);

export const RegisterInfoProvider = ({ children }: { children: ReactNode }) => {
  return (
    <RegisterInfoContext.Provider
      value={useRegisterInfo({} as StudentInfoType)}
    >
      {children}
    </RegisterInfoContext.Provider>
  );
};

export default RegisterInfoContext;
