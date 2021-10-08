import type { ICost } from 'src/types/cost'
import type { IIncome } from 'src/types/income'
import { CostCategory, IncomeCategory } from 'src/enums'

export type Transaction = ICost | IIncome
export type TransactionCategory = CostCategory | IncomeCategory

export type { ICost, IIncome }
