import { QuerySnapshot } from 'firebase/firestore'

export function convertSnapshotToArray<T>(querySnapshot: QuerySnapshot<T>): T[] {
  const result: T[] = []

  querySnapshot.forEach((doc) => {
    result.push(doc.data())
  })

  return result
}
