import IController from '../interfaces/controller';
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import asyncHandler from 'express-async-handler';
import ClientError from '../util/ClientError';

class StudentController implements IController {
  PATH = '/students';
  router = Router();
  prisma = new PrismaClient();

  constructor() {
    this.loadRoutes();
  }
  loadRoutes() {
    this.router.get(this.PATH, this.getAllStudents);
  }

  // @desc Get all students from the database
  // @route GET /api/students
  // @domain private
  getAllStudents = asyncHandler(async (req, res, next) => {
    const students = await this.prisma.student.findMany();

    res.status(200).json({
      data: students,
    });
  });

  registerStudent = asyncHandler(async (req, res, next) => {
    const studentExists = await this.prisma.student.findFirst({
      where: {
        email: req.body.email,
      },
    });

    if (!studentExists) {
      const result = await this.prisma.student.create({
        data: req.body,
      });
    } else {
      next(new ClientError('Error: student already exists', 400));
    }
  });
}

export default StudentController;
