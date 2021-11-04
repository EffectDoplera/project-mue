import { CreateTransactionDto } from 'core/domain'
import { formatISO } from 'date-fns'

type CreateTransactionFormFields = CreateTransactionDto

export const INITIAL_VALUES: CreateTransactionFormFields = {
  title: '',
  value: 1000,
  date: formatISO(Date.now()),
  category: '',
  comment: '',
}
