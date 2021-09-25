import { Transactions } from 'components/Transactions/Transactions'
import { IncomeCategory } from 'enums'

const Income = () => {
  const income = [
    {
      category: IncomeCategory.SALARY,
      value: 30000,
      currency: 'рублей',
    },
    {
      category: IncomeCategory.SPORT_COMPENSATION,
      value: 1000,
      currency: 'рублей',
    },
  ]

  return <Transactions transactions={income} />
}

export default Income
