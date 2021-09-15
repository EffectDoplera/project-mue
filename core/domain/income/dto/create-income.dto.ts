import { BaseDomain } from 'core/domain/common/baseDomain'

export interface CreateIncomeDto extends BaseDomain {
  readonly id: string
  readonly category: string | null
}
