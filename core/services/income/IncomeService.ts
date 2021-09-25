import { CreateIncomeDto } from 'core/domain/income/dto/create-income.dto'
import { Income } from 'core/domain/income/income';

export interface IIncomeService {
  readonly create: (income: CreateIncomeDto) => Promise<Income>
}
