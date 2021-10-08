import { BaseDomain } from 'src/core/domain/common/baseDomain'

export interface Income extends BaseDomain {
  readonly id: string
  readonly name: string
  value: string
  readonly currency: string
  readonly date: Date
  readonly category: string
}
