// React
import { createContext } from 'react';

// Types
import type { ReactNode } from 'react';
import type { UseRegisterInfoType } from '../types/useRegisterInfo';
import type { studentInfoType } from '../types/studentInfo';

// Hooks
import useRegisterInfo from '../hooks/useRegisterInfo';

// Create Context
const RegisterInfoContext = createContext<UseRegisterInfoType | null>(null);

// Context Provider
export const RegisterInfoProvider = ({ children }: { children: ReactNode }) => {
  return (
    <RegisterInfoContext.Provider
      value={useRegisterInfo({
        std_fName: '',
        std_lName: '',
        std_middleInitial: '',
        std_ssn: '',
        std_email: '',
        std_address: '',
        std_city: '',
        std_state: '',
        std_zip: '',
        std_birthDate: '',
        std_phoneNum: '',
        work_name: '',
        work_address: '',
        work_city: '',
        work_state: '',
        work_zip: '',
        work_phoneNum: '',
        ceu_license_number: '',
        ceu_license_exp_date: '',
        chha_license_number: '',
        chha_license_exp_date: '',
      })}
    >
      {children}
    </RegisterInfoContext.Provider>
  );
};

export default RegisterInfoContext;
