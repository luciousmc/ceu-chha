import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import IController from '../interfaces/controller';
import ClassService from '../services/class';
import { IClassInfo } from '../interfaces/class.interface';
import InvalidIdError from '../util/InvalidIdError';
import InsufficientDataError from '../util/InsufficientDataError';

class ClassController implements IController {
  PATH = '/classes';
  prisma = new PrismaClient();
  router = Router();

  constructor() {
    this.loadRoutes();
  }
  loadRoutes() {
    this.router.get(this.PATH, this.getClasses);
    this.router.get(`${this.PATH}/registered`, this.getAllRegisteredClasses);
    this.router.post(this.PATH, this.createClass);
    this.router.delete(`${this.PATH}/:id`, this.deleteClass);
  }

  // @desc Get all classes
  // @route GET /api/classes
  // @access private
  getClasses = asyncHandler(async (req, res, next) => {
    const classes = await ClassService.getAllClasses();

    if (classes.length) {
      res.status(200).json({ message: 'Success', data: classes });
    }
  });

  // @desc Get all Registered classes
  // @route GET /api/classes/registered
  // @access private(admin)
  getAllRegisteredClasses = asyncHandler(async (req, res, next) => {
    const classes = await ClassService.getAllRegisteredClasses();
    res.status(200).json(classes);
  });

  // @desc Create a Topic to add to the database
  // @route POST /api/classes
  // @access private(admin)
  createClass = asyncHandler(async (req, res, next) => {
    const { topic, dates_avail }: IClassInfo = req.body;

    if (!topic || dates_avail.length < 1) {
      throw new InsufficientDataError();
    }

    const createdClass = await ClassService.createClass({ topic, dates_avail });

    res.status(201).json({
      message: 'Class Created',
      data: createdClass,
    });
  });

  // @desc Delete a course from the database
  // @route DELETE /api/courses/:id
  // @access private(admin)
  deleteClass = asyncHandler(async (req, res, next) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      throw new InvalidIdError();
    }

    const result = await this.prisma.class.delete({
      where: {
        id: id,
      },
    });

    console.log('result', result);

    res.status(200).send(`id ${id} deleted from the database`);
  });
}

export default ClassController;
