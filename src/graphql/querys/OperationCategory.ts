import { gql } from '@apollo/client'

export const QUERY_ALL_OPERATION_CATEGORIES = gql`
  query Query {
    allCategories {
      id
      title
    }
  }
`
