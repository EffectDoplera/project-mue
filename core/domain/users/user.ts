import { BaseDomain } from 'core/domain/common/baseDomain'

export interface User extends BaseDomain {
  readonly id: string
  readonly email: string | null
  readonly fullName: string | null
  readonly avatar: string | null
}
