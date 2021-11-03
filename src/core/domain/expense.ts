import { Transaction } from 'core/domain/transaction'

export type Expense = Transaction
export type CreateExpenseDto = Omit<Expense, '_id'>
