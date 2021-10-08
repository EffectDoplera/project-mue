import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { Income } from 'src/core/domain/income'
import { CreateIncomeDto } from 'src/core/domain/income/dto/create-income.dto'
import { IncomeService } from 'src/data/services/income/IncomeService'
import { IncomeCategory } from 'src/enums'
import { incomeCategories } from 'src/mocks'
import { RootState } from 'src/store/store'

export type IncomeState = {
  incomes: Income[]
  incomeCategories: IncomeCategory[]
}

const initialState: IncomeState = {
  incomes: [],
  // TODO: Убрать моки
  incomeCategories: [...incomeCategories],
}

export const createIncome = createAsyncThunk('create', async (createIncome: CreateIncomeDto) => {
  return await IncomeService.create(createIncome)
})

export const createIncomeByUserId = createAsyncThunk('createByUser', async (createIncome: CreateIncomeDto) => {
  return await IncomeService.createByUserId(createIncome)
})

export const getIncomeByUserId = createAsyncThunk('getByUserId', async () => await IncomeService.getByUserId())

export const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createIncome.fulfilled, (state, { payload }) => {
        state.incomes.push(payload)
      })
      .addCase(createIncomeByUserId.fulfilled, (state, { payload }) => {
        state.incomes.push(payload)
      })
      .addCase(getIncomeByUserId.fulfilled, (state, { payload }) => {
        state.incomes = [...payload]
      })
  },
})

export const selectIncomes = (state: RootState): IncomeState => state.income
export const selectIncomeCategories = (state: RootState) => state.income.incomeCategories

export const selectIncomeOptions = createSelector(selectIncomeCategories, (incomeCategories) => {
  return incomeCategories.map((category) => ({
    value: category,
    label: category,
  }))
})

export default incomeSlice.reducer