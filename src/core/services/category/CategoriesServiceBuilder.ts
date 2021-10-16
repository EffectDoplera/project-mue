import { Category, CreateCategoryDto } from 'core/domain/_category/category'

export interface ICategoryServiceBuilder {
  readonly create: (createCategoryDto: CreateCategoryDto) => Promise<Category>

  readonly setDefaultByUserId: (userId: string) => Promise<Category[]>

  readonly getDefault: () => Promise<Category[]>
}
