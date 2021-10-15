import { BaseDomain } from 'core/domain/common/baseDomain'

export interface SigninDto extends BaseDomain {
  email: string
  password: string
}
