import { OperationType } from 'core/enums'
import { ICategoryService } from 'core/services/category/CategoryService'
import { CategoryServiceBuilder } from 'data/services/category/CategoryService'

export const ExpensesCategoryService: ICategoryService = new CategoryServiceBuilder(OperationType.EXPENSE)
