import { type ClassInfo } from '../../types/ClassInfo';

export interface StudentCourseInfo {
  first_name: string;
  last_name: string;
  ceu_license_num: number;
  ceu_exp_date: string;
  chha_license_num: number;
  chha_exp_date: string;
  registered_classes: number;
  classes_total: number;
  classes: ClassInfo[];
}
