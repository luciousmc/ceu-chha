const asyncHandler = require('express-async-handler');
const Class = require('../models/classModel');

// @desc    Get all classes
// @route   GET /api/classes
// @access  Private
const getClasses = asyncHandler(async (req, res) => {
  const res = await (await Class.getClasses()).json();

  res.status(200).json({ message: 'getClass function executed', data: res });
});

module.exports = {
  getClasses,
};
