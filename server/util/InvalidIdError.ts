import ClientError from './ClientError';

class InvalidIdError extends ClientError {
  constructor(id: number) {
    super(`Invalid id: "${id}"`, 400);
  }
}

export default InvalidIdError;
