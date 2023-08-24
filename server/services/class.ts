import { PrismaClient } from '@prisma/client';
import asyncHandler from 'express-async-handler';

const prisma = new PrismaClient();

export class ClassService {
  static async getAllClasses() {
    const result = await prisma.class.findMany({
      include: {
        dates_avail: true,
      },
    });
    return result;
  }
  static async createClass() {}
  static async deleteClass() {}
  static async updateClass() {}
}
