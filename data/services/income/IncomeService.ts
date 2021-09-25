import { IIncomeService } from 'core/services/income/IncomeService'
import { CreateIncomeDto } from 'core/domain/income/dto/create-income.dto'
import { addDoc, collection, CollectionReference } from 'firebase/firestore'
import { firebaseDB } from 'firebaseInstance/firebaseClient'
import { Income } from 'core/domain/income/income'

export const IncomeService: IIncomeService = class {
  private static incomeCollection = collection(firebaseDB, 'income') as CollectionReference<Income>

  public static async create(income: CreateIncomeDto): Promise<Income> {
    try {
      const incomeRef = await addDoc<CreateIncomeDto>(this.incomeCollection, income)

      return {...income, id: incomeRef.id}
    } catch (e) {
      throw e
    }
  }
}
