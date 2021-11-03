import { Category } from 'core/domain/_category/category'
import { CategoryType } from 'core/enums'

export interface ICategoryService {
  // readonly create: (createCategoryDto: CreateCategoryDto) => Promise<Category>

  readonly setDefaultByUserId: (userId: string) => Promise<Category[]>

  // readonly getDefault: () => Promise<Category[]>

  readonly getAllByType: (type: CategoryType) => Promise<Category[]>
}
