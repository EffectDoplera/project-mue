import { CategoryName } from 'core/domain/_category'
import { IncomeCategory } from 'core/enums'

export const convertCategoryName = (categoryName: CategoryName): string => {
  const categoryNameMap = new Map<CategoryName, string>([
    [IncomeCategory.SALARY, 'Salary'],
    [IncomeCategory.ADVANCE, 'Advance'],
    [IncomeCategory.OTHER, 'Other'],
  ])

  return categoryNameMap.get(categoryName) ?? categoryName
}
