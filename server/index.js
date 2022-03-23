const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/classes', require('./routes/classRoutes'));

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
