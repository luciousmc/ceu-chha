import { PrismaClient, Prisma } from '@prisma/client';
import * as express from 'express';
import asyncHandler from 'express-async-handler';
import ClientError from '../util/ClientError';

class ClassController {
  path = '/classes';
  prisma = new PrismaClient();
  router = express.Router();

  constructor() {
    this.loadRoutes();
  }
  loadRoutes() {
    this.router.get(this.path, this.getClasses);
    this.router.post(this.path, this.createClass);
    this.router.delete(`${this.path}/:id`, this.deleteClass);
  }

  getClasses = asyncHandler(async (req, res) => {
    const result = await this.prisma.class.findMany();
    res.status(200).json({ message: 'Success', data: result });
  });

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
        platform,
      },
    });

    res.status(201).json({
      message: 'Class Created',
      data: result,
    });
  });

  deleteClass = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const id = req.params.id;

    if (!id) {
      next(new ClientError('Invalid id number', 400));
    }

    const result = await this.prisma.class.delete({
      where: {
        id: Number(id),
      },
    });
  };
}

export default ClassController;
