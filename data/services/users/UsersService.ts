import { getDocs, collection, addDoc, CollectionReference } from 'firebase/firestore'
import { CrateUserDto } from 'core/domain/users/dto/create-user.dto'
import { User } from 'core/domain/users/user'
import { IUsersService } from 'core/services/users/UsersService'
import { firebaseDB } from 'firebaseInstance/firebaseClient'

export const UsersService: IUsersService = class {
  private static usersCollection = collection(firebaseDB, 'users') as CollectionReference<User>

  public static async create(user: CrateUserDto): Promise<User> {
    try {
      await addDoc<User>(this.usersCollection, user)

      return user
    } catch (e) {
      throw e
    }
  }

  public static async getAll(): Promise<User[]> {
    try {
      const userShapshot = await getDocs<User>(this.usersCollection)
      const usersList = userShapshot.docs.map((userDoc) => userDoc.data())

      return usersList
    } catch (e) {
      throw e
    }
  }

  // public static async getByEmail(email: string): Promise<User> {
  //   const c = collection(firebaseDB, "users")
  //   const q = query<User>(c, where("email", "==", email));
  //   const querySnapshot = await getDocs(q);
  //   const [userRef]: User[] = querySnapshot.docs
  //
  //   return userRef
  // }
}
