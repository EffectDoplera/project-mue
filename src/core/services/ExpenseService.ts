import { CreateExpenseDto, Expense } from 'core/domain'

export abstract class ExpenseService {
  public static create: (expense: CreateExpenseDto) => Promise<Expense>
  public static createForCurrentUser: (expense: CreateExpenseDto) => Promise<Expense>
  public static getAllForCurrentUser: () => Promise<Expense[]>
}
