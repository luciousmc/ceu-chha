import { PrismaClient } from '@prisma/client';
import { IClassInfo } from '../interfaces/class.interface';
import ClassNotFoundError from '../util/ClassNotFoundError';

const prisma = new PrismaClient();

export default class ClassService {
  static async checkClassExists(id: number) {
    const result = await prisma.class.findUnique({
      where: {
        id,
      },
    });
    return result ? true : false;
  }

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

  static async deleteClass(id: number) {
    if (!this.checkClassExists(id)) {
      throw new ClassNotFoundError();
    }

    const result = await prisma.class.delete({
      where: {
        id,
      },
    });

    return result;
  }
  static async updateClass() {}
}
