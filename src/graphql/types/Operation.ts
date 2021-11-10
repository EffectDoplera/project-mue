import { extendType, objectType } from 'nexus'
import { User } from './User'

export const Operation = objectType({
  name: 'Operation',
  definition(t) {
    t.string('id')
    t.string('title')
    t.string('type')
    t.string('category')
    t.string('amount')
    t.string('currency')
    t.list.field('owner', {
      type: User,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.operation
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .users()
      },
    })
  },
})

export const OperationsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('operations', {
      type: 'Operation',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.operation.findMany()
      },
    })
  },
})
