import { Prisma, PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { IClassInfo } from '../interfaces/class.interface';

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

  static async getAllRegisteredClasses() {
    const result = await prisma.registeredClasses.findMany({
      include: {
        student: true,
        class: {
          include: {
            dates_avail: true,
          },
        },
      },
    });
    return result;
  }

  static async createClass({ topic, dates_avail }: IClassInfo) {
    const result = await prisma.class.create({
      data: {
        topic,
        dates_avail: {
          createMany: {
            data: dates_avail,
          },
        },
      },
      include: {
        dates_avail: true,
      },
    });
    return result;
  }
  static async deleteClass() {}
  static async updateClass() {}
}
