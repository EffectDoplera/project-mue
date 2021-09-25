import { BaseDomain } from 'core/domain/common/baseDomain'

export interface CreateIncomeDto extends BaseDomain {
  readonly name: string
  readonly value: string
  readonly currency: string
  readonly date: Date
  readonly category: string
}
