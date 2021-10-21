import { SigningDto, SignupDto, UserModel } from 'core/domain'

/**
 * Authentication service
 */
export abstract class AuthorizeService {
  /**
   * SignIn user
   */
  static signIn: (signInDto: SigningDto) => Promise<UserModel | null>

  /**
   * SignUp user
   */
  static signUp: (signUpDto: SignupDto) => Promise<UserModel | null>

  /**
   *  Logs out the user
   */
  static logout: () => Promise<void>

  /**
   * Get auth user uid
   */
  static getUid: () => string

  /**
   * Whether user is loged in or not
   */
  // isLoggedin: () => boolean

  /**
   * On user authorization changed event
   */
  // onAuthStateChanged: (callBack: (user: UserClaim) => void) => any
}
