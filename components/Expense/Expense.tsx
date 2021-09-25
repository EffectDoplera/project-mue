import { Transactions } from 'components'
import { CostCategory } from 'enums'

const Expense = () => {
  const expense = [
    {
      category: CostCategory.CASH,
      value: 3000,
      currency: 'рублей',
    },
    {
      category: CostCategory.VOCATION,
      value: 5000,
      currency: 'рублей',
    },
    {
      category: CostCategory.UTILITIES,
      value: 500,
      currency: 'рублей',
    },
  ]

  return <Transactions transactions={expense} />
}

export default Expense
