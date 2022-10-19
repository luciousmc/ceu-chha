import IController from '../interfaces/controller';
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import asyncHandler from 'express-async-handler';
import StudentAlreadyExistsError from '../util/StudentAlreadyExistsError';
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
  // @access private
  getAllStudents = asyncHandler(async (req, res, next) => {
    const students = await this.prisma.student.findMany();

    if (students.length) {
      res.status(200).json({
        data: students,
      });
    } else {
      res.status(200).json({
        message: 'There are no students currently registered',
      });
    }
  });

  // @desc Register a new student
  // @route POST /api/students
  // @access public
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
      next(new StudentAlreadyExistsError());
    }
  });
}

export default StudentController;
