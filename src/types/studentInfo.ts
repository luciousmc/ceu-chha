export type personalInfoType = {
  std_fName: string;
  std_middleInitial?: string;
  std_lName: string;
  std_birthDate: Date | null | string;
  std_ssn: string;
  std_address: string;
  std_city: string;
  std_state: string;
  std_zip: string;
  std_email?: string;
  std_phoneNum: string;
};

export type workInfoType = {
  work_name?: string;
  work_address?: string;
  work_city?: string;
  work_state?: string;
  work_zip?: string;
  work_phoneNum?: string;
};

type ceuLicense = {
  ceu_license_number: number | null | string;
  ceu_license_exp_date: Date | null | string;
};

type chhaLicense = {
  chha_license_number: number | null | string;
  chha_license_exp_date: Date | null | string;
};

export type certificateInfoType =
  | ceuLicense
  | chhaLicense
  | (ceuLicense & chhaLicense);

export type studentInfoType = personalInfoType &
  workInfoType &
  certificateInfoType;
