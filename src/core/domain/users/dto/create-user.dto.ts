import { BaseDomain } from 'src/core/domain/common/baseDomain'

export interface CreateUserDto extends BaseDomain {
  readonly id: string
  readonly email: string | null
  readonly fullName: string | null
  readonly avatar: string | null
}
