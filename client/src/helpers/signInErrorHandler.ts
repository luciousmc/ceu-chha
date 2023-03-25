import * as FB_ERR from '../constants/firebase-errors';

const signInErrorHandler = (errorMessage: string) => {
  switch (errorMessage) {
    case FB_ERR.USER_NOT_FOUND:
    case FB_ERR.INVALID_PASSWORD:
    case FB_ERR.WRONG_PASSWORD:
      return 'Invalid username or password';
    case FB_ERR.INTERNAL_ERROR:
      return 'Unexpected server error. Please try again later';
    case FB_ERR.INVALID_EMAIL:
      return 'Username is not valid';
    default:
      return errorMessage;
  }
};

export default signInErrorHandler;
