import type { ICost } from 'types/cost'
import type { IIncome } from 'types/income'
import { CostCategory, IncomeCategory } from 'enums'

export type Transaction = ICost | IIncome
export type TransactionCategory = CostCategory | IncomeCategory

export type { ICost, IIncome }
