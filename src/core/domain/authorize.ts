import { Email, Password } from 'core/domain/_common'
import { BaseDomain } from 'core/domain/_common/baseDomain'

export interface SigningDto extends Omit<BaseDomain, '_id'> {
  readonly email: Email
  readonly password: Password
}

export interface SignupDto extends SigningDto {
  readonly confirmPassword: Password
}

export interface LoginUser extends BaseDomain {
  /**
   * user email
   */
  readonly email: Email
  readonly password: Password
  readonly fullName: string
  readonly avatar: string
}
