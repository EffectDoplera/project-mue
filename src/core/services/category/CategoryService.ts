import { CreateCategoryDto, Category } from 'core/domain/_category/category'

export interface ICategoryService {
  readonly create: (createCategoryDto: CreateCategoryDto) => Promise<Category>

  readonly setDefaultByUserId: (userId: string) => Promise<Category[]>
}
