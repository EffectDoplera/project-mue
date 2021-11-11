import { OperationType } from 'core/enums'
import { useAppSelector } from 'hooks/useAppSelector'
import { useTransactionTabContext } from 'hooks/useTransactionTabContext'
import { useMemo } from 'react'
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

  const getAllTransactions = transactionType === OperationType.INCOME ? getAllIncomes : getAllExpenses
  const getAllTransactionCategories =
    transactionType === OperationType.INCOME ? getAllIncomeCategories : getAllExpenseCategories
  const createForCurrentUser = transactionType === OperationType.INCOME ? createIncome : createExpense

  return useMemo(
    () => ({
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
    }),
    [transactionType],
  )
}
