import { CreateTransactionDto } from 'core/domain'
import { IncomeCategory } from 'core/enums'
import { format, formatISO } from 'date-fns'

type CreateTransactionFormFields = CreateTransactionDto

export const INITIAL_VALUES_EXPENSE: CreateTransactionFormFields = {
  title: '',
  value: 1000,
  date: formatISO(Date.now()),
  category: '',
  comment: '',
}

export const INITIAL_VALUES_INCOMES: CreateTransactionFormFields = {
  title: `Salary for the ${format(Date.now(), 'MMMM')}`,
  value: 1000,
  date: formatISO(Date.now()),
  category: IncomeCategory.SALARY,
  comment: '',
}
