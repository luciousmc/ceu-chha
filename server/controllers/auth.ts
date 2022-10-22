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
    this.router.post(`${this.PATH}/login`, this.login);
    this.router.post(`${this.PATH}/logout`, this.logout);
  }

  // @desc Logs the user into the app
  // @route POST /auth/login
  // @access public
  login = asyncHandler(async (req, res, next) => {});

  // @desc Logs the user out of the app
  // @route POST /auth/logout
  // @access private
  logout = asyncHandler(async (req, res, next) => {});
}
