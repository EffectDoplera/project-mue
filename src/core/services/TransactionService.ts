import { CreateExpenseDto, CreateTransactionDto, Expense, Transaction } from 'core/domain'

export abstract class TransactionService {
  public static create: (transaction: CreateTransactionDto) => Promise<Transaction>
  public static createForCurrentUser: (transaction: CreateTransactionDto) => Promise<Transaction>
  public static getAllForCurrentUser: () => Promise<Transaction[]>
}
