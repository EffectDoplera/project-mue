import { CreateIncomeDto, Income } from 'core/domain'
import { IncomeService } from 'core/services'
import { AuthorizeService } from 'data/services/index'
import { addDoc, collection, CollectionReference, getDocs } from 'firebase/firestore'
import { firebaseDB } from 'firebaseInstance/firebaseClient'
import { convertSnapshotToArray } from 'api/firebaseDataApi'

export class IncomeServiceImpl extends IncomeService {
  private static incomeCollection = collection(firebaseDB, 'income') as CollectionReference<Income>

  public static async create(income: CreateIncomeDto): Promise<Income> {
    try {
      const incomeRef = await addDoc<CreateIncomeDto>(this.incomeCollection, income)

      return { ...income, _id: incomeRef.id }
    } catch (e) {
      throw e
    }
  }

  public static async createForCurrentUser(income: CreateIncomeDto): Promise<Income> {
    try {
      const uuid = AuthorizeService.getUid()
      const userIncomeCollection = collection(firebaseDB, `users/${uuid}/incomes`) as CollectionReference<Income>
      const incomeRef = await addDoc<CreateIncomeDto>(userIncomeCollection, income)

      return { ...income, _id: incomeRef.id }
    } catch (e) {
      throw e
    }
  }

  public static async getAllForCurrentUser(): Promise<Income[]> {
    try {
      const uuid = AuthorizeService.getUid()
      const userIncomeCollection = collection(firebaseDB, `users/${uuid}/incomes`) as CollectionReference<Income>
      const incomeSnapshot = await getDocs(userIncomeCollection)

      return convertSnapshotToArray(incomeSnapshot)
    } catch (e) {
      throw e
    }
  }
}
