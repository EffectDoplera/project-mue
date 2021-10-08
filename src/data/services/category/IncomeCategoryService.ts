import { ICategoryService } from 'src/core/services/category/CategoryService'
import { CategoryServiceBuilder } from 'src/data/services/category/CategoryService'
import { CategoryType } from 'src/enums'

export const IncomeCategoryService: ICategoryService = new CategoryServiceBuilder(CategoryType.INCOME)
