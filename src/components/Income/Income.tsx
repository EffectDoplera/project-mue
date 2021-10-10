import { Transactions } from 'components/Transactions/Transactions'
import { useAppSelector } from 'hooks'
import { selectIncomes } from 'modules/Income/incomeSlice'

const Income = () => {
  const { incomes } = useAppSelector(selectIncomes)

  return <Transactions transactions={incomes} />
}

export default Income
