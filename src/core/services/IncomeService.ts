import { Income, CreateIncomeDto } from 'core/domain'

export abstract class IncomeService {
  public static create: (income: CreateIncomeDto) => Promise<Income>
  public static createForCurrentUser: (income: CreateIncomeDto) => Promise<Income>
  public static getAllForCurrentUser: () => Promise<Income[]>
}
