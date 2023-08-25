import ClientError from './ClientError';

class InsufficientDataError extends ClientError {
  constructor() {
    super('Please provide all data', 400);
  }
}

export default InsufficientDataError;
