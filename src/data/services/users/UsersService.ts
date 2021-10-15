import { CreateUserDto } from 'core/domain/users/dto/create-user.dto'
import { User, UserModel } from 'core/domain/users/user'
import { IUsersService } from 'core/services/users/UsersService'
import { IncomeCategoryService } from 'data/services/category/IncomeCategoryService'
import { ExpensesCategoryService } from 'data/services/category/ExpensesCategoryService'
import { collection, CollectionReference, doc, DocumentReference, setDoc } from 'firebase/firestore'
import { firebaseDB } from 'firebaseInstance/firebaseClient'

export const UsersService: IUsersService = class {
  private static usersCollection = collection(firebaseDB, 'users') as CollectionReference<UserModel>

  public static async create(user: CreateUserDto): Promise<User> {
    try {
      await setDoc<UserModel>(doc(this.usersCollection, user.id) as DocumentReference<UserModel>, user)

      const incomeCategories = await IncomeCategoryService.setDefaultByUserId(user.id)
      const expenseCategories = await ExpensesCategoryService.setDefaultByUserId(user.id)

      return { ...user, expenseCategories, incomeCategories }
    } catch (e) {
      throw e
    }
  }
}
