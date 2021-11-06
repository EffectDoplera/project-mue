import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import {
  CreateExpenseDto,
  CreateIncomeDto,
  Expense,
  ExpenseCategory,
  Income,
  IncomeCategory,
  Transaction,
} from 'core/domain'
import { CategoryName } from 'core/domain/_category'
import { CategoryType } from 'core/enums'
import { ExpensesCategoryService, ExpenseService, IncomeCategoryService, IncomeService } from 'data/services'
import { RootState } from 'store/store'

type TransactionState = {
  incomes: Income[]
  incomeCategories: IncomeCategory[]
  expenses: Expense[]
  expenseCategories: ExpenseCategory[]
}

const initialState: TransactionState = {
  incomes: [{ category: 'MOCK', _id: '1', value: 1, date: Date.now().toLocaleString('en'), title: '' }],
  incomeCategories: [],
  expenses: [{ category: 'MOCK', _id: '1', value: 1, date: Date.now().toLocaleString('en'), title: '' }],
  expenseCategories: [],
}

export const createIncome = createAsyncThunk('createIncome', async (createIncome: CreateIncomeDto) => {
  return await IncomeService.createForCurrentUser(createIncome)
})

export const getAllIncomes = createAsyncThunk('getAllIncomes', async () => await IncomeService.getAllForCurrentUser())

export const getAllIncomeCategories = createAsyncThunk(
  'getAllIncomeCategories',
  async () => await IncomeCategoryService.getAllByType(CategoryType.INCOME),
)

export const createExpense = createAsyncThunk('createExpense', async (createExpense: CreateExpenseDto) => {
  return await ExpenseService.createForCurrentUser(createExpense)
})

export const getAllExpenses = createAsyncThunk(
  'getAllExpenses',
  async () => await ExpenseService.getAllForCurrentUser(),
)

export const getAllExpenseCategories = createAsyncThunk(
  'getAllExpenseCategories',
  async () => await ExpensesCategoryService.getAllByType(CategoryType.EXPENSE),
)

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createIncome.fulfilled, (state, { payload }) => {
        state.incomes.push(payload)
      })
      .addCase(getAllIncomes.fulfilled, (state, { payload }) => {
        state.incomes = payload
      })
      .addCase(getAllIncomeCategories.fulfilled, (state, { payload }) => {
        state.incomeCategories = payload
      })
      .addCase(createExpense.fulfilled, (state, { payload }) => {
        state.expenses.push(payload)
      })
      .addCase(getAllExpenses.fulfilled, (state, { payload }) => {
        state.expenses = payload
      })
      .addCase(getAllExpenseCategories.fulfilled, (state, { payload }) => {
        state.expenseCategories = payload
      })
  },
})

const selectTransactionState = (state: RootState): TransactionState => state.transactions

export const selectTransactions = (transactionName: CategoryName) => (state: RootState) => {
  return transactionName === CategoryType.INCOME
    ? selectTransactionState(state).incomes
    : selectTransactionState(state).expenses
}

export const selectTransactionCategories = (transactionName: CategoryName) => (state: RootState) =>
  transactionName === CategoryType.INCOME
    ? selectTransactionState(state).incomeCategories
    : selectTransactionState(state).expenseCategories

export const selectSquashedByCategoryTransactions = (transactionName: CategoryType) =>
  createSelector(selectTransactions(transactionName), (transactions) => {
    return transactions.reduce<Transaction[]>((acc, transaction) => {
      const foundIncomeIndex = acc.findIndex(({ category }) => transaction.category === category)
      if (foundIncomeIndex !== -1) {
        const [dropped] = acc.splice(foundIncomeIndex, 1)

        acc.push({ ...dropped, value: dropped.value + transaction.value })
      } else {
        acc.push(transaction)
      }

      return acc
    }, [])
  })

export const selectSquashedByCategoryTransactionForChar = (transactionName: CategoryType) =>
  createSelector(selectSquashedByCategoryTransactions(transactionName), (transactions) =>
    transactions.map(({ value, category }) => ({ transactionName: category, A: value })),
  )

export const selectTransactionSum = (transactionName: CategoryType) =>
  createSelector(selectTransactions(transactionName), (transactions) =>
    transactions.reduce((acc, transaction) => acc + transaction.value, 0),
  )

export const selectTransactionOptions = (transactionName: CategoryType) =>
  createSelector(selectTransactionCategories(transactionName), (transactionCategories) => {
    return transactionCategories.map(({ name }) => ({
      value: name,
      label: name,
    }))
  })

export default transactionSlice.reducer
