import ClientError from './ClientError';

class ClassNotFoundError extends ClientError {
  constructor() {
    super('Class not found', 400);
  }
}

export default ClassNotFoundError;
