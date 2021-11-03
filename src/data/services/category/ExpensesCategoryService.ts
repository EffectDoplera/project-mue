import { CategoryType } from 'core/enums'
import { ICategoryService } from 'core/services/category/CategoryService'
import { CategoryServiceBuilder } from 'data/services/category/CategoryService'

export const ExpensesCategoryService: ICategoryService = new CategoryServiceBuilder(CategoryType.EXPENSE)
