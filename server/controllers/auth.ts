import { PrismaClient, type Student } from '@prisma/client';
import { Router } from 'express';
import IController from '../interfaces/controller';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import BadCredentialsError from '../util/BadCredentialsError';
import { excludeFields } from '../util/prisma.helpers';

class AuthController implements IController {
  PATH = '/auth';
  router = Router();
  prisma = new PrismaClient();

  constructor() {
    this.loadRoutes();
  }
  loadRoutes() {
    this.router.post(`${this.PATH}/login`, this.login);
    this.router.post(`${this.PATH}/logout`, this.logout);
  }

  // @desc Logs the user into the app
  // @route POST /auth/login
  // @access public
  login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await this.prisma.student.findFirst({
      where: {
        email: email,
      },
    });

    if (user) {
      const matchPassword = await bcrypt.compare(password, user.password);
      if (matchPassword) {
        const userWithoutPw = excludeFields(user, 'password');
        res.status(200).send(userWithoutPw);
      } else {
        next(new BadCredentialsError());
      }
    } else {
      next(new BadCredentialsError());
    }
  });

  // @desc Logs the user out of the app
  // @route POST /auth/logout
  // @access private
  logout = asyncHandler(async (req, res, next) => {});
}
