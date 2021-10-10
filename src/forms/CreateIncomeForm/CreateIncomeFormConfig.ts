import { format } from 'date-fns'
import { IncomeCategory } from 'enums'

interface CreateIncomeFormFields {
  name: string
  value: string
  currency: string
  date: Date
  category: IncomeCategory
}

export const INITIAL_VALUES: CreateIncomeFormFields = {
  name: `Зарплата за ${format(new Date(), 'MMMM')}`,
  value: '1000',
  currency: 'RUB',
  date: new Date(),
  category: IncomeCategory.SALARY,
}
