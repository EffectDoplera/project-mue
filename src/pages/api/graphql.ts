import { ApolloServer } from 'apollo-server-micro'
import { createContext } from 'graphql/context'
import { schema } from 'graphql/schema'
import { NextApiRequest, NextApiResponse, PageConfig } from 'next'

const apolloServer = new ApolloServer({
  context: createContext,
  schema,
  debug: true,
  introspection: true,
})

const startServer = apolloServer.start()

const graphqlHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', 'https://studio.apollographql.com')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer

  return await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export default graphqlHandler

// // Apollo Server Micro takes care of body parsing
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}
