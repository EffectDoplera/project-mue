import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Operation {
    id: String
    title: String
    type: String
    category: String
    amount: String
    currency: String
    owner: [String]
  }

  type Query {
    operations: [Operation]!
  }
`
