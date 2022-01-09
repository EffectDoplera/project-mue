import { IncomeCategory } from 'core/enums'
import { format, formatISO } from 'date-fns'
import { NexusGenInputs } from 'types'

type CreateTransactionFormFields = Omit<NexusGenInputs['CreateOperationInput'], 'type' | 'currency'>

export const INITIAL_VALUES_EXPENSE: CreateTransactionFormFields = {
  title: '',
  amount: 1000,
  date: formatISO(Date.now()),
  category: '',
  commentary: '',
}

export const INITIAL_VALUES_INCOMES: CreateTransactionFormFields = {
  title: `Salary for the ${format(Date.now(), 'MMMM')}`,
  amount: 1000,
  date: formatISO(Date.now()),
  category: IncomeCategory.SALARY,
  commentary: '',
}
