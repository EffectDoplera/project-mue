import { ApolloServer } from 'apollo-server-micro'
import { createContext } from 'graphql/context'
import { resolvers } from 'graphql/resolvers'
import { typeDefs } from 'graphql/schema'
import { PageConfig } from 'next'

const apolloServer = new ApolloServer({ typeDefs, resolvers, context: createContext })

const startServer = apolloServer.start()

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', 'https://studio.apollographql.com')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer

  await apolloServer.createHandler({
    path: 'api/graphql',
  })(req, res)
}

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}
