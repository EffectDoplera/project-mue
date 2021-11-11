import { OperationType as OperationTypeEnum } from 'core/enums'
import { arg, enumType, extendType, mutationType, nonNull, objectType, stringArg } from 'nexus'
import { Currency } from './Currency'
import { User } from './User'

export const OperationType = enumType({
  name: 'OperationType',
  members: [OperationTypeEnum.INCOME, OperationTypeEnum.EXPENSE],
})

export const Operation = objectType({
  name: 'Operation',
  definition(t) {
    t.string('id')
    t.string('title')
    t.field('type', { type: OperationType })
    t.string('category')
    t.string('amount')
    t.field('currency', { type: Currency })
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
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.operation.findMany()
      },
    })
  },
})

export const OperationsMutations = mutationType({
  definition(t) {
    t.field('createOperation', {
      type: 'OperationUpdateResponse',
      args: {
        title: nonNull(stringArg()),
        type: nonNull(
          arg({
            type: OperationType,
          }),
        ),
        category: nonNull(stringArg()),
        amount: nonNull(stringArg()),
        currency: nonNull(
          arg({
            type: Currency,
          }),
        ),
      },
      description: 'Create new operation for current user',
      async resolve(_, args, ctx) {
        const operation = await ctx.prisma.operation.create({
          data: args,
        })

        return {
          operation,
        }
      },
    })
  },
})

export const OperationUpdateResponse = objectType({
  name: 'OperationUpdateResponse',
  definition(t) {
    t.field('operation', { type: 'Operation' })
  },
})
