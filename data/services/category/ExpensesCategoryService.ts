import { ICategoryService } from 'core/services/category/CategoryService'
import { CategoryServiceBuilder } from './CategoryService'
import { CategoryType } from 'enums'

export const ExpensesCategoryService: ICategoryService = new CategoryServiceBuilder(CategoryType.EXPENSES)
