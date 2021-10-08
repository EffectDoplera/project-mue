import { BaseDomain } from 'src/core/domain/common'

export interface Category extends BaseDomain {
  readonly id: string
  readonly name: string
}
