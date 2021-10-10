import { CreateCategoryDto, Category } from 'core/domain/category'

export interface ICategoryService {
  readonly create: (createCategoryDto: CreateCategoryDto) => Promise<Category>

  // readonly getAll: () => Promise<Category[]>
}
