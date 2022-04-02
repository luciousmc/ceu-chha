const express = require('express');
const router = express.Router();
const {
  registerStudent,
  getAllStudents,
} = require('../controllers/studentController');

router.get('/', getAllStudents);
router.post('/add', registerStudent);

module.exports = router;
