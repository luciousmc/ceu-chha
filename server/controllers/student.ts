import IController from '../interfaces/controller';
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import asyncHandler from 'express-async-handler';
import StudentAlreadyExistsError from '../util/StudentAlreadyExistsError';
import StudentIdNotFoundError from '../util/StudentIdNotFoundError';

class StudentController implements IController {
  PATH = '/students';
  router = Router();
  prisma = new PrismaClient();

  constructor() {
    this.loadRoutes();
  }
  loadRoutes() {
    this.router.get(this.PATH, this.getAllStudents);
    this.router.get(`${this.PATH}/:uid`, this.getStudentById);
    this.router.post(this.PATH, this.registerStudent);
    this.router.delete(`${this.PATH}/:uid`, this.deleteStudent);
  }
  async checkStudentExists(uid: string) {
    const result = await this.prisma.student.findFirst({
      where: {
        id: uid,
      },
    });
    return result;
  }

  // @desc Get all students from the database
  // @route GET /api/students
  // @access private
  getAllStudents = asyncHandler(async (req, res, next) => {
    const students = await this.prisma.student.findMany();

    if (students.length) {
      res.status(200).json(students);
    } else {
      res.status(200).json({
        message: 'There are no students currently registered',
      });
    }
  });

  // @desc Get a single student object by their Id
  // @route GET /api/students/:id
  // @access private
  getStudentById = asyncHandler(async (req, res, next) => {
    const uid = req.params.uid;

    const student = await this.checkStudentExists(uid);

    if (student) {
      res.status(200).json(student);
    } else {
      next(new StudentIdNotFoundError(uid));
    }
  });

  // @desc Register a new student
  // @route POST /api/students
  // @access public
  registerStudent = asyncHandler(async (req, res, next) => {
    const studentExists = await this.prisma.student.findFirst({
      where: {
        ssn: req.body.ssn,
      },
    });

    if (!studentExists) {
      const result = await this.prisma.student.create({
        data: req.body,
      });

      res.status(201).json(result);
    } else {
      next(new StudentAlreadyExistsError());
    }
  });

  // @desc Delete a student
  // @route DELETE /api/students/:id
  // @access private(admin)
  deleteStudent = asyncHandler(async (req, res, next) => {
    const uid = req.params.uid;

    const studentExists = await this.checkStudentExists(uid);

    if (studentExists) {
      await this.prisma.student.delete({
        where: {
          id: uid,
        },
      });
      res.status(200);
    } else {
      next(new StudentIdNotFoundError(uid));
    }
  });
}

export default StudentController;
