import { makeSchema, declarativeWrappingPlugin } from 'nexus'
import { join } from 'path'
import * as types from './resolvers'

export const schema = makeSchema({
  types,
  plugins: [declarativeWrappingPlugin({ disable: true })],
  outputs: {
    typegen: join(process.cwd(), 'src', 'types', 'index.d.ts'),
    schema: join(process.cwd(), 'src', 'graphql', 'schema.graphql'),
  },
  contextType: {
    export: 'Context',
    module: join(process.cwd(), 'src', 'graphql', 'context.ts'),
  },
  nonNullDefaults: {
    output: true,
  },
})
