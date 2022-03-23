const ClientError = require('../util/ClientError');

const errorHandler = (err, req, res, next) => {
  if (err instanceof ClientError) {
    const status = err.status ? err.status : 500;

    res.status(status).json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
    });
  } else {
    next(err);
  }
};

module.exports = errorHandler;
