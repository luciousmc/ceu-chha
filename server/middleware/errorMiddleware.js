const ClientError = require('../util/ClientError');

const errorHandler = (err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({
      errorCode: err.code,
      message: err.message,
    });
  } else {
    next(err);
  }
};

module.exports = errorHandler;
