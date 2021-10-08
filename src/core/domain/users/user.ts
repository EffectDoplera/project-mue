import { ExpenseCategory, IncomeCategory } from 'src/core/domain/category'
import { BaseDomain } from 'src/core/domain/common'

export interface UserModel extends BaseDomain {
  readonly id: string
  readonly email: string | null
  readonly fullName: string | null
  readonly avatar: string | null
}

export interface User extends UserModel {
  readonly incomeCategories: IncomeCategory[]
  readonly expenseCategories: ExpenseCategory[]
}
