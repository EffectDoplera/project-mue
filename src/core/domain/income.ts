import { Transaction } from 'core/domain/_transaction'

export type Income = Transaction
export type CreateIncomeDto = Omit<Income, '_id'>
