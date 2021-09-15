import { IIncomeService } from 'core/services/income/IncomeService'
import { CreateIncomeDto } from 'core/domain/income/dto/create-income.dto'

export const IncomeService: IIncomeService = class {
  public static async create({}: CreateIncomeDto): Promise<any> {}
}
