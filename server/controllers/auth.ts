import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
import IController from '../interfaces/controller';
import asyncHandler from 'express-async-handler';

class AuthController implements IController {
  PATH = '/auth';
  router = Router();
  prisma = new PrismaClient();

  constructor() {
    this.loadRoutes();
  }
  loadRoutes() {
    this.router.post(`${this.PATH}/register`, this.register);
  }

  register = asyncHandler(async (req, res, next) => {
    const userData = req.body;

    const userExists = await this.prisma.student.findFirst({
      where: {
        ssn: req.body.ssn,
      },
    });
  });
}
