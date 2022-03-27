import { useState } from 'react';
import { studentInfoType } from '../types/studentInfo';

function useRegisterInfo(state: studentInfoType) {
  return useState<studentInfoType>(state);
}

export default useRegisterInfo;
