import { Transactions } from 'src/components/Transactions/Transactions'
import { useAppSelector } from 'src/hooks'
import { selectIncomes } from 'src/modules/Income/incomeSlice'

const Income = () => {
  const { incomes } = useAppSelector(selectIncomes)

  return <Transactions transactions={incomes} />
}

export default Income
