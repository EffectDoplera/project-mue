import { SigninDto } from 'src/core/domain/authorize/dto/signin.dto'
import { SignupDto } from 'src/core/domain/authorize/dto/signup.dto'
import { UserModel } from 'src/core/domain/users/user'

/**
 * Authentication service interface
 */
export interface IAuthorizeService {
  /**
   * SignIn user
   */
  readonly signIn: (signInDto: SigninDto) => Promise<UserModel | null>

  /**
   * SignUp user
   */
  readonly signUp: (signUpDto: SignupDto) => Promise<UserModel | null>

  /**
   *  Logs out the user
   */
  readonly logout: () => Promise<void>

  /**
   * Get auth user uid
   */
  readonly getUid: () => string

  /**
   * Whether user is loged in or not
   */
  // isLoggedin: () => boolean

  /**
   * On user authorization changed event
   */
  // onAuthStateChanged: (callBack: (user: UserClaim) => void) => any
}
