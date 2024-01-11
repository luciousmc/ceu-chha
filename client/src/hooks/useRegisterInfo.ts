import { useState } from 'react';
import { StudentInfoType } from '../types/studentInfo';

function useRegisterInfo(state: StudentInfoType) {
  return useState<StudentInfoType>(state);
}

export default useRegisterInfo;
