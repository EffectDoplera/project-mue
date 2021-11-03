import { Transaction } from 'core/domain/transaction'

export type Income = Transaction
export type CreateIncomeDto = Omit<Income, '_id'>
