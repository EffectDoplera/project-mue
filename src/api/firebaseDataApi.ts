import { QuerySnapshot } from 'firebase/firestore'

export function convertSnapshotToArray<T>(querySnapshot: QuerySnapshot<T>): T[] {
  const result: T[] = []

  querySnapshot.forEach((doc) => {
    const docItem = { _id: doc.id, ...doc.data() }
    result.push(docItem)
  })

  return result
}
