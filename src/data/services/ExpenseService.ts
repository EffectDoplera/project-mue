import { convertSnapshotToArray } from 'api/firebaseDataApi'
import { CreateExpenseDto, CreateIncomeDto, Expense } from 'core/domain'
import { ExpenseService } from 'core/services'
import { AuthorizeService } from 'data/services/index'
import { addDoc, collection, CollectionReference, getDocs } from 'firebase/firestore'
import { firebaseDB } from 'firebaseInstance/firebaseClient'

export class ExpenseServiceImpl extends ExpenseService {
  private static expenseCollection = collection(firebaseDB, 'expense') as CollectionReference<Expense>

  public static async create(expense: CreateExpenseDto): Promise<Expense> {
    try {
      const expenseRef = await addDoc<CreateExpenseDto>(this.expenseCollection, expense)

      return { ...expense, _id: expenseRef.id }
    } catch (e) {
      throw e
    }
  }

  public static async createForCurrentUser(expense: CreateExpenseDto): Promise<Expense> {
    try {
      const uuid = AuthorizeService.getUid()
      const userExpenseCollection = collection(firebaseDB, `users/${uuid}/expense`) as CollectionReference<Expense>
      const expenseRef = await addDoc<CreateIncomeDto>(userExpenseCollection, expense)

      return { ...expense, _id: expenseRef.id }
    } catch (e) {
      throw e
    }
  }

  public static async getAllForCurrentUser(): Promise<Expense[]> {
    try {
      const uuid = AuthorizeService.getUid()
      const userExpenseCollection = collection(firebaseDB, `users/${uuid}/expense`) as CollectionReference<Expense>
      const expenseSnapshot = await getDocs(userExpenseCollection)

      return convertSnapshotToArray(expenseSnapshot)
    } catch (e) {
      throw e
    }
  }
}
