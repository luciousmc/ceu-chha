export type personalInfo = {
  firstName: string;
  middleInitial?: string;
  lastName: string;
  birthDate: string;
  ssn: number;
  address: string;
  city: string;
  state: string;
  zipCode: number;
  email: string;
  phoneNumber: string;
};

export type workInfo = {
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

export type certificateInfo =
  | ceuLicense
  | chhaLicense
  | (ceuLicense & chhaLicense);

export type studentInfo = personalInfo & workInfo & certificateInfo;
