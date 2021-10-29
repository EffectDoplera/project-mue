import { CreateExpenseDto } from 'core/domain/expense'
import { formatISO } from 'date-fns'

type CreateIncomeFormFields = CreateExpenseDto

export const INITIAL_VALUES: CreateIncomeFormFields = {
  title: '',
  value: 1000,
  date: formatISO(Date.now()),
  category: '',
  comment: '',
}
