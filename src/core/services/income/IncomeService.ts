import { CreateIncomeDto } from 'src/core/domain/income/dto/create-income.dto'
import { Income } from 'src/core/domain/income/income'

export interface IIncomeService {
  readonly create: (income: CreateIncomeDto) => Promise<Income>
  readonly createByUserId: (income: CreateIncomeDto) => Promise<Income>
  readonly getByUserId: () => Promise<Income[]>
}