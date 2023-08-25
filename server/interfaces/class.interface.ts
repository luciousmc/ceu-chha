import { Prisma } from '@prisma/client';

export interface IClassInfo {
  topic: string;
  dates_avail: Prisma.ClassDateCreateManyInput[];
}
