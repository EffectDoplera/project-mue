import { Category } from 'core/domain/_category/category'
import { OperationType } from 'core/enums'

export interface ICategoryService {
  // readonly create: (createCategoryDto: CreateCategoryDto) => Promise<OperationType>

  readonly setDefaultByUserId: (userId: string) => Promise<Category[]>

  // readonly getDefault: () => Promise<OperationType[]>

  readonly getAllByType: (type: OperationType) => Promise<Category[]>
}
