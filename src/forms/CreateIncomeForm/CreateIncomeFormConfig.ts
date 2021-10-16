import { CreateIncomeDto } from 'core/domain/income'
import { format, formatISO } from 'date-fns'
import { IncomeCategory } from 'enums'

type CreateIncomeFormFields = CreateIncomeDto

export const INITIAL_VALUES: CreateIncomeFormFields = {
  title: `Зарплата за ${format(Date.now(), 'MMMM')}`,
  value: 1000,
  date: formatISO(Date.now()),
  category: IncomeCategory.SALARY,
  comment: '',
}
