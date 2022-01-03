import { Currency, OperationType as OperationTypeEnum } from 'core/enums'
import { inputObjectType } from 'nexus'

export const CreateOperationInput = inputObjectType({
  name: 'CreateOperationInput',
  definition(t) {
    t.nonNull.string('title')
    t.nonNull.field('type', { type: 'OperationType', default: OperationTypeEnum.EXPENSE })
    t.nonNull.string('category')
    t.nonNull.float('amount')
    t.nonNull.field('currency', { type: 'Currency', default: Currency.RUB })
    t.string('commentary')
    t.nonNull.field('date', { type: 'DateTime' })
  },
})
