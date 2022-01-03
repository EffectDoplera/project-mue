import { makeSchema, declarativeWrappingPlugin } from 'nexus'
import { join } from 'path'
import * as types from './resolvers'

export const schema = makeSchema({
  types,
  plugins: [declarativeWrappingPlugin({ disable: true })],
  outputs: {
    typegen: join(process.cwd(), 'node_modules', '@types', 'nexus-typegen', 'index.d.ts'),
    schema: join(process.cwd(), '../schema.graphql'),
  },
  contextType: {
    export: 'Context',
    alias: 'Context',
    module: join(process.cwd(), 'src', 'graphql', 'context.ts'),
  },
  nonNullDefaults: {
    output: true,
  },
})
