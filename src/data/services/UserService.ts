import { CreateUserDto, User, UserModel } from 'core/domain/user'
import { UserService } from 'core/services'
import { collection, CollectionReference, doc, DocumentReference, setDoc } from 'firebase/firestore'
import { firebaseDB } from 'firebaseInstance/firebaseClient'

export class UserServiceImpl extends UserService {
  private static usersCollection = collection(firebaseDB, 'users') as CollectionReference<UserModel>

  public static async create(user: CreateUserDto, uuid: string): Promise<User> {
    try {
      await setDoc<Omit<UserModel, '_id'>>(doc(this.usersCollection, uuid) as DocumentReference<UserModel>, user)

      // const incomeCategories = await IncomeCategoryService.setDefaultByUserId(uuid)
      // const expenseCategories = await ExpensesCategoryService.setDefaultByUserId(uuid)

      return { ...user, _id: uuid }
    } catch (e) {
      throw e
    }
  }
}
