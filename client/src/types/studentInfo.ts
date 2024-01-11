export interface PersonalInfoType {
  std_fName: string;
  std_middleInitial?: string;
  std_lName: string;
  std_birthDate: Date;
  std_ssn: string;
  std_address: string;
  std_city: string;
  std_state: string;
  std_zip: string;
  std_email?: string;
  std_phoneNum: string;
}

export interface WorkInfoType {
  work_name?: string;
  work_address?: string;
  work_city?: string;
  work_state?: string;
  work_zip?: string;
  work_phoneNum?: string;
}

type CeuLicense = {
  ceu_license_number?: string;
  ceu_license_exp_date?: Date;
};

type ChhaLicense = {
  chha_license_number?: string;
  chha_license_exp_date?: Date;
};

export type CertificateInfoType = CeuLicense & ChhaLicense;

export type StudentInfoType = PersonalInfoType &
  WorkInfoType &
  CertificateInfoType;
