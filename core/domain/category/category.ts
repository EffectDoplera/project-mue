import { BaseDomain } from '../common'

export interface Category extends BaseDomain {
  readonly id: string
  readonly name: string
}
