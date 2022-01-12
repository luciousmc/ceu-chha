import { useState } from 'react';
import { studentInfo } from '../types/studentInfo';

function useRegisterInfo(state: studentInfo) {
  return useState<studentInfo>(state);
}

export default useRegisterInfo;
