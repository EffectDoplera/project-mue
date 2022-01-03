import { gql } from '@apollo/client'

export const CREATE_OPERATION = gql`
  mutation Operations(
    $amount: Float!
    $category: String!
    $currency: Currency!
    $tittle: String!
    $type: OperationType!
    $date: DateTime!
  ) {
    createOperation(
      data: { amount: $amount, category: $category, currency: $currency, title: $tittle, type: $type, date: $date }
    ) {
      title
    }
  }
`
