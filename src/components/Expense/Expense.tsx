import { Transactions } from 'components/index'
import { useAppSelector } from 'hooks'
import { selectSquashedByCategoryExpense } from 'store/expenseSlice'

const Expense = () => {
  const expenses = useAppSelector(selectSquashedByCategoryExpense)

  return <Transactions transactions={expenses} />
}

export default Expense
