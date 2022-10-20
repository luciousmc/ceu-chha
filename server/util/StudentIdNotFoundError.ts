import ClientError from './ClientError';

class StudentIdNotFoundError extends ClientError {
  constructor(id: number) {
    super(`Student ${id} does not exist`, 404);
  }
}

export default StudentIdNotFoundError;
