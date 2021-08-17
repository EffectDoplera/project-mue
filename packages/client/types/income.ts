import { IncomeCategory } from '@/enums/category'

export interface IIncome {
  _id: string
  category: IncomeCategory
  value: number
  currency: string
  comment: string
}
