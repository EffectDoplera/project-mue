import { CategoryName } from 'core/domain/_category/categoryName'
import { BaseDomain } from 'core/domain/_common'

export type CreateCategoryDto = Omit<Category, '_id'>

export interface Category extends BaseDomain {
  readonly name: CategoryName
}
