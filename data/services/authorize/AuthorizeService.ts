import { SigninDto } from 'core/domain/authorize/dto/signin.dto'
import { SignupDto } from 'core/domain/authorize/dto/signup.dto'
import { UsersService } from 'data/services/users/UsersService'
import { User } from 'core/domain/users/user'
import { IAuthorizeService } from 'core/services/authorize/AuthorizeService'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { firebaseAuth } from 'firebaseInstance/firebaseClient'

/**
 * Authorize service
 */
export const AuthorizeService: IAuthorizeService = class {
  public static async signIn({ email, password }: SigninDto): Promise<User | null> {
    try {
      const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password)

      const loginedUser: User = {
        id: user.uid,
        email: user.email,
        avatar: user.photoURL,
        fullName: user.displayName,
      }

      return loginedUser
    } catch (e) {
      throw e
    }
  }

  public static async signUp({ email, password }: SignupDto): Promise<User | null> {
    try {
      const { user } = await createUserWithEmailAndPassword(firebaseAuth, email, password)

      const createdUser: User = {
        id: user.uid,
        email: user.email,
        avatar: '',
        fullName: '',
      }

      await UsersService.create(createdUser)

      return createdUser
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

  public static async getUid(): Promise<string> {
    try {
      return firebaseAuth?.currentUser?.getIdToken() ?? ''
    } catch (e) {
      throw e
    }
  }
}
