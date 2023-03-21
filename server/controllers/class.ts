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
    this.router.post(this.PATH, this.createClass);
    this.router.delete(`${this.PATH}/:id`, this.deleteClass);
  }

  // @desc Get all classes
  // @route GET /api/classes
  // @access private
  getClasses = asyncHandler(async (req, res) => {
    const result = await this.prisma.class.findMany();
    res.status(200).json({ message: 'Success', data: result });
  });

  // @desc Create a Topic to add to the database
  // @route GET /api/courses
  // @access private(admin)
  createClass = asyncHandler(async (req, res, next) => {
    const { topic, date, am_pm, platform } = req.body;

    if (!topic || !date || !am_pm || !platform) {
      next(new ClientError('Please provide all data', 400));
    }

    const result = await this.prisma.class.create({
      data: {
        topic,
        date: {
          create: {
            date,
            am_pm,
          },
        },
      },
    });

    res.status(201).json({
      message: 'Class Created',
      data: result,
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
