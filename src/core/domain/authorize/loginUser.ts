import { BaseDomain } from 'src/core/domain/common/baseDomain'

export interface LoginUser extends BaseDomain {
  /**
   * user id
   */
  id: string

  /**
   * user email
   */
  email: string
  password: string
  fullName: string
  avatar: string
}
