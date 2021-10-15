import { IIncomeService } from 'core/services/income/IncomeService'
import { CreateIncomeDto } from 'core/domain/income/dto/create-income.dto'
import { AuthorizeService } from 'data/services/authorize/AuthorizeService'
import { addDoc, collection, CollectionReference, getDocs } from 'firebase/firestore'
import { firebaseDB } from 'firebaseInstance/firebaseClient'
import { Income } from 'core/domain/income/income'
import { convertSnapshotToArray } from 'api/firebaseDataApi'

export const IncomeService: IIncomeService = class {
  private static incomeCollection = collection(firebaseDB, 'income') as CollectionReference<Income>

  public static async create(income: CreateIncomeDto): Promise<Income> {
    try {
      const incomeRef = await addDoc<CreateIncomeDto>(this.incomeCollection, income)

      return { ...income, id: incomeRef.id }
    } catch (e) {
      throw e
    }
  }

  public static async createByUserId(income: CreateIncomeDto): Promise<Income> {
    try {
      const uuid = AuthorizeService.getUid()
      const userIncomeCollection = collection(firebaseDB, `users/${uuid}/incomes`) as CollectionReference<Income>
      const incomeRef = await addDoc<CreateIncomeDto>(userIncomeCollection, income)

      return { ...income, id: incomeRef.id }
    } catch (e) {
      throw e
    }
  }

  public static async getByUserId(): Promise<Income[]> {
    try {
      const uuid = AuthorizeService.getUid()
      const userIncomeCollection = collection(firebaseDB, `users/${uuid}/incomes`) as CollectionReference<Income>
      const incomeSnapshot = await getDocs(userIncomeCollection)

      console.log(convertSnapshotToArray(incomeSnapshot))

      return convertSnapshotToArray(incomeSnapshot)
    } catch (e) {
      throw e
    }
  }
}
