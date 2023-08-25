import ClientError from './ClientError';

class InvalidIdError extends ClientError {
  constructor() {
    super('Invalid Id', 400);
  }
}

export default InvalidIdError;
