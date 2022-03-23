const asyncHandler = require('express-async-handler');
const Class = require('../models/classModel');
const ClientError = require('../util/ClientError');

// @desc    Get all classes
// @route   GET /api/classes
// @access  Private
const getClasses = asyncHandler(async (req, res) => {
  const result = await Class.getClasses();

  res.status(200).json({ message: 'Success', data: result });
});

// @desc    Create a class for students to register for
// @route   POST /api/classes/create
// @access  Private (admin)
const createClass = asyncHandler(async (req, res, next) => {
  const { topic, date, am_pm, platform, status } = req.body;

  if (!topic || !date || !am_pm || !platform || !status) {
    throw new ClientError('Please provide all data', 400);
  }

  const result = await Class.createClass(req.body);

  res.status(201).json({
    message: 'Class Created',
    data: result,
  });
});

module.exports = {
  getClasses,
  createClass,
};
