import { gql } from '@apollo/client'

export const QUERY_ALL_OPERATION_CATEGORIES = gql`
  query OperationCategories {
    operationCategories {
      id
      title
    }
  }
`
