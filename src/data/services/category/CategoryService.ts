import { Category } from 'core/domain/_category/category'
import { OperationType } from 'core/enums'
import { ICategoryServiceBuilder } from 'core/services/category/CategoriesServiceBuilder'
import { collection, CollectionReference, doc, getDocs, query, setDoc, where } from 'firebase/firestore'
import { firebaseDB } from 'firebaseInstance/firebaseClient'

export class CategoryServiceBuilder implements ICategoryServiceBuilder {
  constructor(private readonly type: OperationType) {
    this.type = type
  }

  private allCategories = collection(firebaseDB, 'categories') as CollectionReference<Category>

  private convertTypeToCategoryNameCollection(): string {
    return `${this.type.toLowerCase()}Categories`
  }

  public async setDefaultByUserId(userId: string): Promise<Category[]> {
    try {
      const defaultCategories = await this.getAllByType(this.type)

      await setDoc(
        doc(collection(firebaseDB, `users/${userId}/${this.convertTypeToCategoryNameCollection()}`), 'default'),
        {
          categories: defaultCategories,
        },
      )

      return defaultCategories
    } catch (e) {
      throw e
    }
  }

  public async getAllByType(type: OperationType): Promise<Category[]> {
    try {
      const q = query(this.allCategories, where('type', '==', type))
      const categorySnapshot = await getDocs(q)

      const res: Category[] = []

      categorySnapshot.forEach((doc) => {
        const category: Category = { ...doc.data(), _id: doc.id }
        res.push(category)
      })

      return res
    } catch (e) {
      throw e
    }
  }
}
