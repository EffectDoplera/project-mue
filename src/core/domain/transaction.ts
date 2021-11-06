import { BaseDomain } from 'core/domain/_common'

export interface Transaction extends BaseDomain {
  readonly title: string
  readonly value: number
  readonly date: string
  readonly category: string
  readonly comment?: string
}

export type CreateTransactionDto = Omit<Transaction, '_id'>
