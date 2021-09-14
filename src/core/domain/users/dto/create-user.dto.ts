import { BaseDomain } from 'core/domain/common/baseDomain'

export interface CrateUserDto extends BaseDomain {
  readonly id: string
  readonly email: string | null
  readonly fullName: string | null
  readonly avatar: string | null
}
