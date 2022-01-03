import { gql } from '@apollo/client'

export const CREATE_OPERATION = gql`
  mutation Operations(
    $amount: Float!
    $category: String!
    $currency: Currency!
    $title: String!
    $type: OperationType!
    $date: DateTime!
  ) {
    createOperation(
      input: { amount: $amount, category: $category, currency: $currency, title: $title, type: $type, date: $date }
    ) {
      title
    }
  }
`
