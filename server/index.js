const express = require('express');
require('dotenv').config();

const errorHandler = require('./middleware/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/classes', require('./routes/classRoutes'));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
