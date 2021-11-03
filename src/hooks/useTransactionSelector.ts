import { CategoryType } from 'core/enums'
import { useAppSelector } from 'hooks/useAppSelector'
import { useTransactionTabContext } from 'hooks/useTransactionTabContext'
import {
  createExpense,
  createIncome,
  getAllExpenseCategories,
  getAllExpenses,
  getAllIncomeCategories,
  getAllIncomes,
  selectSquashedByCategoryTransactionForChar,
  selectSquashedByCategoryTransactions,
  selectTransactionCategories,
  selectTransactionOptions,
  selectTransactions,
  selectTransactionSum,
} from 'store/transactionSlice'

export const useTransactionSelector = () => {
  const transactionType = useTransactionTabContext()

  const transactions = useAppSelector(selectTransactions(transactionType))

  const transactionCategories = useAppSelector(selectTransactionCategories(transactionType))

  const transactionSum = useAppSelector(selectTransactionSum(transactionType))

  const transactionOptions = useAppSelector(selectTransactionOptions(transactionType))

  const squashedByCategoryTransaction = useAppSelector(selectSquashedByCategoryTransactions(transactionType))

  const squashedByCategoryForCharTransaction = useAppSelector(
    selectSquashedByCategoryTransactionForChar(transactionType),
  )

  const getAllTransactions = transactionType === CategoryType.INCOME ? getAllIncomes : getAllExpenses
  const getAllTransactionCategories =
    transactionType === CategoryType.INCOME ? getAllIncomeCategories : getAllExpenseCategories
  const createForCurrentUser = transactionType === CategoryType.INCOME ? createIncome : createExpense

  return {
    transactionSum,
    transactionType,
    squashedByCategoryForCharTransaction,
    squashedByCategoryTransaction,
    transactions,
    transactionCategories,
    getAllTransactions,
    getAllTransactionCategories,
    createForCurrentUser,
    transactionOptions,
  }
}
