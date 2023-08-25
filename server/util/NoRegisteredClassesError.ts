import ClientError from './ClientError';

class NoRegisteredClassesError extends ClientError {
  constructor() {
    super('There are currently no registered classes', 200);
  }
}

export default NoRegisteredClassesError;
