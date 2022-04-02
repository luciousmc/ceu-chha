const ClientError = require('../util/ClientError');

const errorHandler = (err, req, res, next) => {
  if (err instanceof ClientError) {
    const status = err.status ? err.status : 500;

    res.status(status).json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
    });
  } else {
    res.status(500).json({
      message: 'An unexpected error occured',
      stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
    });
  }
};

module.exports = errorHandler;
