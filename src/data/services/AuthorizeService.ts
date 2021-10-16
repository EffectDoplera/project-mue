import { SigningDto, SignupDto, User, UserModel } from 'core/domain'
import { AuthorizeService } from 'core/services'
import { UserService } from 'data/services'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { firebaseAuth } from 'firebaseInstance/firebaseClient'

/**
 * Authorize service
 */
export class AuthorizeServiceImpl extends AuthorizeService {
  public static async signIn({ email, password }: SigningDto): Promise<UserModel | null> {
    try {
      const {
        user: { uid, displayName, photoURL, email: signInEmail },
      } = await signInWithEmailAndPassword(firebaseAuth, email, password)

      return {
        _id: uid,
        email: signInEmail,
        avatar: photoURL,
        fullName: displayName,
      }
    } catch (e) {
      throw e
    }
  }

  public static async signUp({ email, password }: SignupDto): Promise<User | null> {
    try {
      const {
        user: { uid, displayName, photoURL, email: signUpEmail },
      } = await createUserWithEmailAndPassword(firebaseAuth, email, password)

      return await UserService.create(
        {
          email: signUpEmail,
          fullName: displayName,
          avatar: photoURL,
        },
        uid,
      )
    } catch (e) {
      throw e
    }
  }

  public static async logout(): Promise<void> {
    try {
      await signOut(firebaseAuth)
    } catch (e) {
      throw e
    }
  }

  public static getUid(): string {
    return firebaseAuth?.currentUser?.uid ?? ''
  }
}
