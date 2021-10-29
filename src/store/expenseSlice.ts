import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { CreateExpenseDto, Expense } from 'core/domain'
import { ExpenseCategory } from 'core/enums'
import { ExpenseService } from 'data/services'
import { expenseCategories } from 'mocks'
import { RootState } from 'store/store'

export type ExpenseState = {
  expenses: Expense[]
  expenseCategories: ExpenseCategory[]
}

const initialState: ExpenseState = {
  expenses: [],
  // TODO: Убрать моки
  expenseCategories: [...expenseCategories],
}

export const createExpense = createAsyncThunk('create', async (createExpense: CreateExpenseDto) => {
  return await ExpenseService.create(createExpense)
})

export const createForCurrentUser = createAsyncThunk(
  'createExpenseForCurrentUser',
  async (createExpense: CreateExpenseDto) => {
    return await ExpenseService.createForCurrentUser(createExpense)
  },
)

export const getExpenseByUserId = createAsyncThunk(
  'getExpenseByUserId',
  async () => await ExpenseService.getAllForCurrentUser(),
)

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createExpense.fulfilled, (state, { payload }) => {
        state.expenses.push(payload)
      })
      .addCase(createForCurrentUser.fulfilled, (state, { payload }) => {
        state.expenses.push(payload)
      })
      .addCase(getExpenseByUserId.fulfilled, (state, { payload }) => {
        state.expenses = payload
      })
  },
})

export const selectExpense = (state: RootState) => state.expense
export const selectExpenseCategories = (state: RootState) => state.expense.expenseCategories

export const selectSquashedByCategoryExpense = createSelector(selectExpense, ({ expenses }) => {
  return expenses.reduce<Expense[]>((acc, expense) => {
    const foundIncomeIndex = acc.findIndex(({ category }) => expense.category === category)
    if (foundIncomeIndex !== -1) {
      const [dropped] = acc.splice(foundIncomeIndex, 1)

      acc.push({ ...dropped, value: dropped.value + expense.value })
    } else {
      acc.push(expense)
    }

    return acc
  }, [])
})

export const selectSquashedByCategoryExpensesForChar = createSelector(selectSquashedByCategoryExpense, (expenses) =>
  expenses.map(({ value, category }) => ({ transactionName: category, A: value })),
)

export const selectExpensesSum = createSelector(selectExpense, ({ expenses }) =>
  expenses.reduce((acc, income) => acc + income.value, 0),
)

export default expenseSlice.reducer
