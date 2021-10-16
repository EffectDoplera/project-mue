import { BaseDomain } from 'core/domain/_common'
import { ExpenseCategory } from 'core/domain/expenseCategory'
import { IncomeCategory } from 'core/domain/incomeCategory'

export type CreateUserDto = Omit<UserModel, '_id'>

export interface UserModel extends BaseDomain {
  readonly email: string | null
  readonly fullName: string | null
  readonly avatar: string | null
}

export interface User extends UserModel {
  readonly incomeCategories: IncomeCategory[]
  readonly expenseCategories: ExpenseCategory[]
}
