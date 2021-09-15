import { CreateIncomeDto } from 'core/domain/income/dto/create-income.dto'

export interface IIncomeService {
  readonly create: (income: CreateIncomeDto) => Promise<any>
}
