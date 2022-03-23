const asyncHandler = require('express-async-handler');

// @desc    Get all classes
// @route   GET /api/classes
// @access  Private
const getClasses = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'getClass function executed' });
});

module.exports = {
  getClasses,
};
