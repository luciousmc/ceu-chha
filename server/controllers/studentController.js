const asyncHandler = require('express-async-handler');
const Student = require('../models/studentModel');
const ClientError = require('../util/ClientError');

const getAllStudents = asyncHandler(async (req, res, next) => {
  const students = await Student.getAllStudents();

  if (!students) {
    next(new ClientError('There are no students in the database', 400));
  }

  res.status(200).json({
    message: 'Success',
    data: students,
  });
});

const registerStudent = asyncHandler(async (req, res, next) => {
  const studentExists = await Student.checkStudentExists(req.body.email);

  if (studentExists) {
    next(new ClientError('Error: student already exists', 400));
  }

  const result = await Student.register(req.body);
  res.status(200).json({
    message: 'Student added to database',
    student: result,
  });
});

module.exports = {
  registerStudent,
  getAllStudents,
};
