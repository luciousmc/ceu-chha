export type personalInfoType = {
  firstName: string;
  middleInitial?: string;
  lastName: string;
  birthDate: string;
  ssn: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  email?: string;
  phoneNumber: string;
};

export type workInfoType = {
  employerName?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: number;
  phoneNumber?: string;
};

type ceuLicense = {
  ceu_license_number: number;
  ceu_license_exp_date: string;
};

type chhaLicense = {
  chha_license_number: number;
  chha_license_exp_date: string;
};

export type certificateInfoType =
  | ceuLicense
  | chhaLicense
  | (ceuLicense & chhaLicense);

export type studentInfoType = personalInfoType &
  workInfoType &
  certificateInfoType;
