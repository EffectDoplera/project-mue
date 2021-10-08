import { SigninDto } from 'src/core/domain/authorize/dto/signin.dto'
import { SignupDto } from 'src/core/domain/authorize/dto/signup.dto'
import { User, UserModel } from 'src/core/domain/users'
import { IAuthorizeService } from 'src/core/services/authorize/AuthorizeService'
import { UsersService } from 'src/data/services/users/UsersService'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { firebaseAuth } from 'src/firebaseInstance/firebaseClient'

/**
 * Authorize service
 */
export const AuthorizeService: IAuthorizeService = class {
  public static async signIn({ email, password }: SigninDto): Promise<UserModel | null> {
    try {
      const {
        user: { uid, displayName, photoURL, email: signInEmail },
      } = await signInWithEmailAndPassword(firebaseAuth, email, password)

      return {
        id: uid,
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

      return await UsersService.create({
        id: uid,
        email: signUpEmail,
        fullName: displayName,
        avatar: photoURL,
      })
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
