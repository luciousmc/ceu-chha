// const express = require('express');
// const { getClasses, createClass } = require('../controllers/classController');

import express from 'express';
import { getClasses, createClass } from '../controllers/class';

const router = express.Router();

router.get('/', getClasses);
router.post('/create', createClass);

// module.exports = router;

export default router;
