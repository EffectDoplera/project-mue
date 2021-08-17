import type { ICost } from './cost'
import type { IIncome } from './income'
import { CostCategory, IncomeCategory } from '@/enums/category'

export type Transaction = ICost | IIncome
export type TransactionCategory = CostCategory | IncomeCategory

export type { ICost, IIncome }
