import { ICategoryService } from 'core/services/category/CategoryService'
import { CategoryServiceBuilder } from 'data/services/category/CategoryService'
import { CategoryType } from 'enums'

export const ExpensesCategoryService: ICategoryService = new CategoryServiceBuilder(CategoryType.EXPENSE)
