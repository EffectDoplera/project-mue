import { Currency as CurrencyEnum } from 'core/enums'
import { enumType } from 'nexus'

export const Currency = enumType({
  name: 'Currency',
  members: [CurrencyEnum.USD, CurrencyEnum.EUR, CurrencyEnum.RUB],
})
