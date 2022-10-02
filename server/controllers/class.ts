import { PrismaClient, Prisma } from '@prisma/client';
import asyncHandler from 'express-async-handler';
import ClientError from '../util/ClientError';

const prisma = new PrismaClient();

const createClass = asyncHandler(async (req, res, next) => {
  const { topic, date, am_pm, platform } = req.body;

  if (!topic || !date || !am_pm || !platform) {
    next(new ClientError('Please provide all data', 400));
  }

  const result = await prisma.class.create({
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

const getClasses = asyncHandler(async (req, res) => {
  const result = await prisma.class.findMany();

  res.status(200).json({ message: 'Success', data: result });
});

export { getClasses, createClass };
