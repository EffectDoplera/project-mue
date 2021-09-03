import { signInWithEmailAndPassword, getIdToken } from 'firebase/auth'
import nookies from 'nookies'
import { firebaseAuth } from '../../../firebase/firebaseClient'

export class AuthFirebaseService {
  public static async login(email: string, password: string) {
    try {
      const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password)

      const token = await getIdToken(user)
      this.setTokenCookie(token)

      return user
    } catch (e) {}
  }

  private static setTokenCookie(token = '') {
    nookies.set(undefined, 'token', token, {})
  }
}
