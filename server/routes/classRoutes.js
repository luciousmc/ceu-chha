const express = require('express');
const { getClasses } = require('../controllers/classController');
const router = express.Router();

router.get('/api/classes', getClasses);

module.exports = router;
