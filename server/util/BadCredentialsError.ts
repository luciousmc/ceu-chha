import ClientError from './ClientError';

class BadCredentialsError extends ClientError {
  constructor() {
    super('Invalid username and password', 400);
  }
}

export default BadCredentialsError;
