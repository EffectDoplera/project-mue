import { CreateUserDto } from 'src/core/domain/users/dto/create-user.dto'
import { User, UserModel } from 'src/core/domain/users/user'
import { IUsersService } from 'src/core/services/users/UsersService'
import { collection, CollectionReference, doc, DocumentReference, setDoc } from 'firebase/firestore'
import { firebaseDB } from 'src/firebaseInstance/firebaseClient'

export const UsersService: IUsersService = class {
  private static usersCollection = collection(firebaseDB, 'users') as CollectionReference<UserModel>

  public static async create(user: CreateUserDto): Promise<User> {
    try {
      await setDoc<UserModel>(doc(this.usersCollection, user.id) as DocumentReference<UserModel>, user)

      // await IncomeCategoryService.setDefaultByUserId(user.id)
      // await ExpensesCategoryService.setDefaultByUserId(user.id)

      return { ...user, expenseCategories: [], incomeCategories: [] }
    } catch (e) {
      throw e
    }
  }
}
