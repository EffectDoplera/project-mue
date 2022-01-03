import { list, nonNull, nullable, queryField } from 'nexus'

// Users
export const allUsers = queryField('users', {
  type: nullable(list(nonNull('User'))),
  resolve: (_parent, _args, ctx) => ctx.prisma.user.findMany(),
})

// Operations
export const allOperations = queryField('operations', {
  type: nullable(list(nonNull('Operation'))),
  resolve: (_parent, _args, ctx) => ctx.prisma.operation.findMany(),
})

export const sumAllOperations = queryField('sumAllOperations', {
  type: nonNull('Int'),
  resolve: (_parent, _args, ctx) => {
    const amountSum = ctx.prisma.operation.aggregate({
      _sum: {
        amount: true,
      },
    })

    return amountSum.then((res) => res._sum.amount || 0)
  },
})

export const allCategories = queryField('allCategories', {
  type: nonNull(list(nonNull('OperationCategory'))),
  resolve: (_parent, _args, ctx) => ctx.prisma.operationCategory.findMany(),
})
