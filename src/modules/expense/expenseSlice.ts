import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Income } from 'core/domain/income'
import { CreateIncomeDto } from 'core/domain/income/dto/create-income.dto'
import { IncomeService } from 'data/services/income/IncomeService'
import { RootState } from 'store/store'

export type ExpenseState = {
  expense: Income[]
}

const initialState: ExpenseState = {
  expense: [],
}

export const createExpense = createAsyncThunk('create', async (createExpense: CreateIncomeDto) => {
  return await IncomeService.create(createExpense)
})

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createExpense.fulfilled, (state, { payload }) => {
      state.expense = [...state.expense, payload]
    })
  },
})

export const selectExpense = (state: RootState) => state.expense

export default expenseSlice.reducer
