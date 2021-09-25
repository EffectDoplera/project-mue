import { Category, CreateCategoryDto } from 'core/domain/category'
import { ICategoryServiceBuilder } from 'core/services/category/CategoriesServiceBuilder'
import { AuthorizeService } from 'data/services/authorize/AuthorizeService'
import { CategoryType } from 'enums'
import { arrayUnion, collection, CollectionReference, doc, getDocs, query, setDoc, where } from 'firebase/firestore'
import { firebaseDB } from 'firebaseInstance/firebaseClient'
import { convertSnapshotToArray } from 'src/api/firebaseDataApi'

export class CategoryServiceBuilder implements ICategoryServiceBuilder {
  constructor(private type: CategoryType) {
    this.type = type
  }

  private categoryCollection = collection(
    firebaseDB,
    this.convertTypeToCategoryNameCollection(),
  ) as CollectionReference<Category>

  private categoryDoc = doc(this.categoryCollection)

  private convertTypeToCategoryNameCollection(): string {
    return `${this.type.toLowerCase()}Categories`
  }

  public async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    try {
      const uuid = await AuthorizeService.getUid()

      // const q = query(this.categoryCollection, where('uuid', '==', uuid))
      // const querySnapshot = await getDocs(q);
      // querySnapshot.forEach((doc) => {
      //     console.log(doc.id, " => ", doc.data());
      // })

      await setDoc(
        doc(this.categoryCollection, uuid),
        { categories: arrayUnion(createCategoryDto), uuid },
        { merge: true },
      )

      return { name: createCategoryDto, id: uuid }
    } catch (e) {
      throw e
    }
  }

  public async getAll(): Promise<Category[]> {
    try {
      const uuid = await AuthorizeService.getUid()

      const q = query(this.categoryCollection, where('uuid', '==', uuid))
      const querySnapshot = await getDocs(q)
      // const categorySnap = await getDoc(this.categoryDoc)
      //
      // if (categorySnap.exists()) {
      //   categorySnap.data()
      //   console.log(categorySnap.data())
      // }
      //
      return convertSnapshotToArray(querySnapshot)
    } catch (e) {
      throw e
    }
  }
}
