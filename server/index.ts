import express from 'express';
require('dotenv').config();

// const errorHandler = require('./middleware/errorMiddleware');
import errorHandler from './middleware/errorMiddleware';
import classRoutes from './routes/classRoutes';
// import studentRoutes from './routes/studentRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/classes', classRoutes);
// app.use('/api/students', studentRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
