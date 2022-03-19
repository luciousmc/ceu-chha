import useRegisterInfo from '../hooks/useRegisterInfo';

export type UseRegisterInfoType = ReturnType<typeof useRegisterInfo>;
export type RegisterInfoType = UseRegisterInfoType[0];
export type SetRegisterInfoType = UseRegisterInfoType[1];
