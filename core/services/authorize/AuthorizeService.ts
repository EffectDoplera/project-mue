import { SigninDto } from 'core/domain/authorize/dto/signin.dto'
import { SignupDto } from 'core/domain/authorize/dto/signup.dto'
import { User } from 'core/domain/users/user'
import { LoginUser } from 'core/domain/authorize/loginUser'

/**
 * Authentication service interface
 */
export interface IAuthorizeService {
  /**
   * SignIn user
   */
  readonly signIn: (signInDto: SigninDto) => Promise<User | null>

  /**
   * SignUp user
   */
  readonly signUp: (signUpDto: SignupDto) => Promise<User | null>

  /**
   *  Logs out the user
   */
  readonly logout: () => Promise<void>

  /**
   * Get auth user uid
   */
  readonly getUid: () => Promise<string>

  /**
   * Whether user is loged in or not
   */
  // isLoggedin: () => boolean

  /**
   * On user authorization changed event
   */
  // onAuthStateChanged: (callBack: (user: UserClaim) => void) => any
}
