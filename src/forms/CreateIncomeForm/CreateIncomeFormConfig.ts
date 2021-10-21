import { CreateIncomeDto } from 'core/domain/income'
import { format, formatISO } from 'date-fns'
import { IncomeCategory } from 'core/enums'

type CreateIncomeFormFields = CreateIncomeDto

export const INITIAL_VALUES: CreateIncomeFormFields = {
  title: `Salary for the ${format(Date.now(), 'MMMM')}`,
  value: 1000,
  date: formatISO(Date.now()),
  category: IncomeCategory.SALARY,
  comment: '',
}
