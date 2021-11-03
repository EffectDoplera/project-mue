import { Transactions } from 'components/Transactions/Transactions'
import { useTransactionSelector } from 'hooks'

const Income = () => {
  const { transactions } = useTransactionSelector()

  return <Transactions transactions={transactions} />
}

export default Income
