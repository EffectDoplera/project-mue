import { IncomeCategory } from 'src/enums'

export interface IIncome {
  _id: string
  category: IncomeCategory
  value: number
  currency: string
  comment: string
}
