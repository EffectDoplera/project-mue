// /graphql/types/User.ts
import { extendType, objectType } from 'nexus'
import { Operation } from './Operation'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id')
    t.string('name')
    t.string('email')
    t.string('email_verified')
    t.string('image')
    t.list.field('operations', {
      type: Operation,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.user
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .operation()
      },
    })
  },
})

export const UsersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('users', {
      type: 'User',
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.user.findMany()
      },
    })
  },
})
