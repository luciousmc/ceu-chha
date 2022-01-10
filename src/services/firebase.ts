import { createUserWithEmailAndPassword, User } from 'firebase/auth';
import { auth } from '../lib/firebase';

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
