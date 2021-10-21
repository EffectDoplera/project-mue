import { Transaction } from 'core/domain/_transaction'

export type Expense = Transaction
export type CreateExpenseDto = Omit<Expense, '_id'>
