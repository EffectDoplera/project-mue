import { arrayUnion, collection, CollectionReference, doc, getDoc, setDoc } from 'firebase/firestore'
import { Category, CreateCategoryDto } from 'core/domain/_category/category'
import { ICategoryServiceBuilder } from 'core/services/category/CategoriesServiceBuilder'
import { AuthorizeService } from 'data/services'
import { CategoryType } from 'enums'
import { firebaseDB } from 'firebaseInstance/firebaseClient'

export class CategoryServiceBuilder implements ICategoryServiceBuilder {
  constructor(private type: CategoryType) {
    this.type = type
  }

  private categoryCollection = collection(
    firebaseDB,
    this.convertTypeToCategoryNameCollection(),
  ) as CollectionReference<{ categories: Category[] }>

  private convertTypeToCategoryNameCollection(): string {
    return `${this.type.toLowerCase()}Categories`
  }

  public async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    try {
      const uuid = AuthorizeService.getUid()

      await setDoc(doc(this.categoryCollection, uuid), { categories: arrayUnion(createCategoryDto) }, { merge: true })

      return { name: createCategoryDto.name, _id: uuid }
    } catch (e) {
      throw e
    }
  }

  public async createByUserId(createCategoryDto: CreateCategoryDto): Promise<Category> {
    try {
      const uuid = AuthorizeService.getUid()

      await setDoc(
        doc(collection(firebaseDB, `users/${uuid}/${this.convertTypeToCategoryNameCollection()}`), 'own'),
        { categories: arrayUnion(createCategoryDto) },
        { merge: true },
      )

      return { name: createCategoryDto.name, _id: uuid }
    } catch (e) {
      throw e
    }
  }

  // public async getAll(): Promise<Category[]> {
  //   try {
  //     const uuid = AuthorizeService.getUid()
  //
  //     const q = query(this.categoryCollection, where('uuid', '==', uuid))
  //     const querySnapshot = await getDocs(q)
  //     // const categorySnap = await getDoc(this.categoryDoc)
  //     //
  //     // if (categorySnap.exists()) {
  //     //   categorySnap.data()
  //     //   console.log(categorySnap.data())
  //     // }
  //     //
  //     return convertSnapshotToArray(querySnapshot)
  //   } catch (e) {
  //     throw e
  //   }
  // }

  public async getDefault(): Promise<Category[]> {
    try {
      const defaultCategories = await getDoc(doc(this.categoryCollection, 'default'))

      if (defaultCategories.exists()) {
        return defaultCategories.data().categories
      }

      return []
    } catch (e) {
      throw e
    }
  }

  public async setDefaultByUserId(userId: string): Promise<Category[]> {
    try {
      const defaultCategories = await this.getDefault()

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
}
