import { gql } from '@apollo/client'

export const QUERY_ALL_OPERATION_CATEGORIES = gql`
  query Query {
    allCategories {
      id
      title
    }
  }
`

export const QUERY_ALL_OPERATIONS = gql`
  query Query {
    operations {
      id
      title
      type
      amount
      currency
      date
      commentary
      category
    }
  }
`

export const QUERY_ALL_OPERATIONS_BY_CATEGORY = gql`
  query Query {
    sumAllOperationsByCategory {
      category
      amount
    }
  }
`
