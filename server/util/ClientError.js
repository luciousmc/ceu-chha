class ClientError {
  constructor({ message, statusCode }) {
    this.message = message;
    this.code = statusCode;
  }
}

module.exports = ClientError;
