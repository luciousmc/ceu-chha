import IController from '../interfaces/controller';
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import asyncHandler from 'express-async-handler';
import StudentAlreadyExistsError from '../util/StudentAlreadyExistsError';
import ClientError from '../util/ClientError';
import StudentIdNotFoundError from '../util/StudentIdNotFoundError';
import bcrypt from 'bcrypt';

class StudentController implements IController {
  PATH = '/students';
  router = Router();
  prisma = new PrismaClient();

  constructor() {
    this.loadRoutes();
  }
  loadRoutes() {
    this.router.get(this.PATH, this.getAllStudents);
    this.router.post(this.PATH, this.registerStudent);
    this.router.delete(`${this.PATH}/:id`, this.deleteStudent);
  }
  async getStudentById(id: number) {
    const result = await this.prisma.student.findFirst({
      where: {
        id: id,
      },
    });
    return result;
  }
  excludeFields<User, Key extends keyof User>(
    user: User,
    ...keys: Key[]
  ): Omit<User, Key> {
    for (let key of keys) {
      delete user[key];
    }
    return user;
  }

  // @desc Get all students from the database
  // @route GET /api/students
  // @access private
  getAllStudents = asyncHandler(async (req, res, next) => {
    const students = await this.prisma.student.findMany();
    const studentsWithoutPasswords = students.map((student) =>
      this.excludeFields(student, 'password')
    );

    if (students.length) {
      res.status(200).json(studentsWithoutPasswords);
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
        ssn: req.body.ssn,
      },
    });

    if (!studentExists) {
      const salt = await bcrypt.genSalt(10);
      const hashedPwd = await bcrypt.hash(req.body.password, salt);

      await this.prisma.student.create({
        data: {
          ...req.body,
          password: hashedPwd,
        },
      });
      req.body.password = undefined;
      res.status(201).json(req.body);
    } else {
      next(new StudentAlreadyExistsError());
    }
  });

  // @desc Delete a student
  // @route DELETE /api/students/:id
  // @access private(admin)
  deleteStudent = asyncHandler(async (req, res, next) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return next(new ClientError('Invalid Id', 400));
    }

    const studentExists = await this.getStudentById(id);

    if (studentExists) {
      await this.prisma.student.delete({
        where: {
          id: id,
        },
      });
      res.status(200).send();
    } else {
      next(new StudentIdNotFoundError(id));
    }
  });
}

export default StudentController;
