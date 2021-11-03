import { Transactions } from 'components/index'
import { useTransactionSelector } from 'hooks'

const Expense = () => {
  const { transactions } = useTransactionSelector()

  return <Transactions transactions={transactions} />
}

export default Expense
