import { Category, CreateCategoryDto } from 'core/domain/category'

export interface ICategoryServiceBuilder {
  create(createCategoryDto: CreateCategoryDto): Promise<Category>

  // getAll(): Promise<Category[]>

  getDefault(): Promise<Category[]>
}
