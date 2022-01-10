import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth';
import { auth } from '../lib/firebase';

// Helper Functions
import signInErrorHandler from '../helpers/signInErrorHandler';

/**
 * Creates a user in firebase using firebase auth.
 * @param username Username of the Student
 * @param password Student's password
 * @returns User Object
 */
export async function createUser(
  username: string,
  password: string
): Promise<void | User> {
  const email = username + '@coasthealthcareercollege.com';

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Signs the user into the app
 * @param username Username of the Student
 * @param password Student's password
 */
export async function signInUser(username: string, password: string) {
  const email = username + '@coasthealthcareercollege.com';

  try {
    await signInWithEmailAndPassword(auth, email, password);
    return '';
  } catch (error: unknown) {
    if (error instanceof Error) {
      const errorMsg = signInErrorHandler(error.message);
      return errorMsg;
    }
  }
}
