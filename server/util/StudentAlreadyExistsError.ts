import ClientError from './ClientError';

class StudentAlreadyExistsError extends ClientError {
  constructor() {
    super('Student Already Exists', 400);
  }
}

export default StudentAlreadyExistsError;
