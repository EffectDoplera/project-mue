import { Currency as CurrencyEnum, OperationType as OperationTypeEnum } from 'core/enums'
import { GraphQLDateTime } from 'graphql-iso-date'
import { enumType, asNexusMethod, objectType } from 'nexus'

// Currency
export const Currency = enumType({
  name: 'Currency',
  members: [CurrencyEnum.USD, CurrencyEnum.EUR, CurrencyEnum.RUB],
})

// DateTime
export const DateTime = asNexusMethod(GraphQLDateTime, 'date')

// Operation
export const OperationType = enumType({
  name: 'OperationType',
  members: [OperationTypeEnum.INCOME, OperationTypeEnum.EXPENSE],
})

export const OperationCategory = objectType({
  name: 'OperationCategory',
  definition(t) {
    t.id('id')
    t.string('title')
  },
})

export const Operation = objectType({
  name: 'Operation',
  definition(t) {
    t.id('id')
    t.string('title')
    t.string('type')
    t.float('amount')
    t.field('currency', { type: 'Currency' })
    t.string('category')
    t.date('date')
    t.nullable.string('commentary')
  },
})

export const OperationByCategory = objectType({
  name: 'OperationByCategory',
  definition(t) {
    t.string('category')
    t.nullable.float('amount')
  },
})

// Role
export const Role = enumType({
  name: 'Role',
  members: ['USER', 'ADMIN', 'QA'],
})

// User
export const User = objectType({
  name: 'User',
  definition(t) {
    t.id('id')
    t.nullable.string('name')
    t.nullable.string('email')
    t.nullable.date('email_verified')
    t.nullable.string('image')
    t.field('role', {
      type: 'Role',
    })
    t.nonNull.list.nonNull.field('operations', {
      type: 'Operation',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.user
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .operations()
      },
    })
  },
})
