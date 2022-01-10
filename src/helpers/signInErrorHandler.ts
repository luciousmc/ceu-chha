import * as FB_ERR from '../constants/firebase-errors';

const signInErrorHandler = (errorMessage: string) => {
  switch (errorMessage) {
    case FB_ERR.USER_NOT_FOUND:
    case FB_ERR.INVALID_PASSWORD:
      return 'Invalid username/password combination';
    case FB_ERR.INTERNAL_ERROR:
      return 'Unexpected Server Error. Please try again later';
    default:
      return errorMessage;
  }
};

export default signInErrorHandler;
