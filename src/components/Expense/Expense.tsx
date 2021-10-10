import { Transactions } from 'components/index'
import { useAppSelector } from 'hooks'
import { expense as mockExpense } from 'mocks'
import { selectExpense } from 'modules/expense/expenseSlice'

const Expense = () => {
  const { expense } = useAppSelector(selectExpense)

  return <Transactions transactions={[...expense, ...mockExpense]} />
}

export default Expense
