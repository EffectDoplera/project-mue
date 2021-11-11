import { ICategoryService } from 'core/services/category/CategoryService'
import { CategoryServiceBuilder } from 'data/services/category/CategoryService'
import { OperationType } from 'core/enums'

export const IncomeCategoryService: ICategoryService = new CategoryServiceBuilder(OperationType.INCOME)
