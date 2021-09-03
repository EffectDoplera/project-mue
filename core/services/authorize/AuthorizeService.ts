import { LoginUser } from '../../domain/authorize/loginUser'

// TODO: implementation
type UserRegisterModel = any
type RegisterUserResult = any
type UserClaim = any

/**
 * Authentication service interface
 */
export interface IAuthorizeService {
  /**
   * Login the user
   */
  login: (email: string, password: string) => Promise<LoginUser | null>

  /**
   * Whether user is loged in or not
   */
  isLoggedin: () => boolean

  /**
   * Logs out the user
   */
  logout: () => void

  /**
   * Register new user
   */
  registerUser: (user: UserRegisterModel) => Promise<RegisterUserResult>

  /**
   * On user authorization changed event
   */
  onAuthStateChanged: (callBack: (user: UserClaim) => void) => any
}
