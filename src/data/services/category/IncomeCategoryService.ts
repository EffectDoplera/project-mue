import { ICategoryService } from 'core/services/category/CategoryService'
import { CategoryServiceBuilder } from 'data/services/category/CategoryService'
import { CategoryType } from 'core/enums'

export const IncomeCategoryService: ICategoryService = new CategoryServiceBuilder(CategoryType.INCOME)
