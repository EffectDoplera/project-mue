import { BaseDomain } from 'core/domain/common/baseDomain'

export interface SignupDto extends BaseDomain {
  readonly email: string
  readonly password: string
}
