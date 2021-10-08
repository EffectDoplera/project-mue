import { Transactions } from 'components'
import { useAppSelector } from 'src/hooks'
import { expense as mockExpense } from 'src/mocks'
import { selectExpense } from 'src/modules/expense/expenseSlice'

const Expense = () => {
  const { expense } = useAppSelector(selectExpense)

  return <Transactions transactions={[...expense, ...mockExpense]} />
}

export default Expense
