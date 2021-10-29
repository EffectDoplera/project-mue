import { Transactions } from 'components/Transactions/Transactions'
import { useAppSelector } from 'hooks'
import { selectIncomes, selectSquashedByCategoryIncomes } from 'store/incomeSlice'

const Income = () => {
  const incomes = useAppSelector(selectSquashedByCategoryIncomes)

  return <Transactions transactions={incomes} />
}

export default Income
