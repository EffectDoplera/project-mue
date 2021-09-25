import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CreateIncomeDto } from 'core/domain/income/dto/create-income.dto'
import { IncomeService } from 'data/services/income/IncomeService'
import { RootState } from 'src/store/store'

export type IncomeState = {
  income: any[]
}

const initialState: IncomeState = {
  income: [],
}

export const createIncome = createAsyncThunk('create', async (createIncome: CreateIncomeDto) => {
  return await IncomeService.create(createIncome)
})

export const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createIncome.fulfilled, (state, { payload }) => {
      state.income = [...state.income, payload]
    })
  },
})

export const selectIncomes = (state: RootState) => state.income

export default incomeSlice.reducer
