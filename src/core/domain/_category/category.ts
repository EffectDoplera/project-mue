import { BaseDomain } from 'core/domain/_common'

export type CreateCategoryDto = Omit<Category, '_id'>
export interface Category extends BaseDomain {
  readonly name: string
}
