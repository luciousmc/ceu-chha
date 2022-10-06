import { NextFunction, Request, Response } from 'express';
import ClientError from '../util/ClientError';

function errorHandler(
  err: ClientError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const status = err.status ? err.status : 500;

  res.status(status).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  });
}

export default errorHandler;
