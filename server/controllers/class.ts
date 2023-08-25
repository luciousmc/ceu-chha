import { PrismaClient } from '@prisma/client';
import {
  Router,
  type Response,
  type Request,
  type NextFunction,
} from 'express';
import asyncHandler from 'express-async-handler';
import IController from '../interfaces/controller';
import ClientError from '../util/ClientError';
import { ClassService } from '../services/class';
import { IClassInfo } from '../interfaces/class.interface';
import NoRegisteredClassesError from '../util/NoRegisteredClassesError';

// import type { Response, Request, NextFunction } from 'express';

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
  getClasses = asyncHandler(async (req, res) => {
    const classes = await ClassService.getAllClasses();
    res.status(200).json({ message: 'Success', data: classes });
  });

  // @desc Get all Registered classes
  // @route GET /api/classes/registered
  // @access private(admin)
  getAllRegisteredClasses = asyncHandler(async (req, res, next) => {
    const classes = await ClassService.getAllRegisteredClasses();

    if (classes.length < 1) {
      next(new NoRegisteredClassesError());
    } else {
      res.status(200).json(classes);
    }
  });

  // @desc Create a Topic to add to the database
  // @route POST /api/classes
  // @access private(admin)
  createClass = asyncHandler(async (req, res, next) => {
    console.log('the body: ', req.body);
    const { topic, dates_avail }: IClassInfo = req.body;

    if (!topic || dates_avail.length < 1) {
      next(new ClientError('Please provide all data', 400));
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
  deleteClass = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const id = Number(req.params.id);

      if (isNaN(id)) {
        next(new ClientError('Invalid id', 400));
      }

      const result = await this.prisma.class.delete({
        where: {
          id: id,
        },
      });

      console.log('result', result);

      res.status(200).send(`id ${id} deleted from the database`);
    }
  );
}

export default ClassController;
