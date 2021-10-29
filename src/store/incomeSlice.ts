import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { CreateIncomeDto, Income } from 'core/domain'
import { IncomeService } from 'data/services'
import { IncomeCategory } from 'core/enums'
import { incomeCategories } from 'mocks'
import { RootState } from 'store/store'

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

export const createForCurrentUser = createAsyncThunk('createByUser', async (createIncome: CreateIncomeDto) => {
  return await IncomeService.createForCurrentUser(createIncome)
})

export const getIncomeByUserId = createAsyncThunk('getByUserId', async () => await IncomeService.getAllForCurrentUser())

export const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createIncome.fulfilled, (state, { payload }) => {
        state.incomes.push(payload)
      })
      .addCase(createForCurrentUser.fulfilled, (state, { payload }) => {
        state.incomes.push(payload)
      })
      .addCase(getIncomeByUserId.fulfilled, (state, { payload }) => {
        state.incomes = payload
      })
  },
})

export const selectIncomes = (state: RootState): IncomeState => state.income
export const selectIncomeCategories = (state: RootState) => state.income.incomeCategories

export const selectSquashedByCategoryIncomes = createSelector(selectIncomes, ({ incomes }) => {
  return incomes.reduce<Income[]>((acc, income) => {
    const foundIncomeIndex = acc.findIndex(({ category }) => income.category === category)
    if (foundIncomeIndex !== -1) {
      const [dropped] = acc.splice(foundIncomeIndex, 1)

      acc.push({ ...dropped, value: dropped.value + income.value })
    } else {
      acc.push(income)
    }

    return acc
  }, [])
})

export const selectSquashedByCategoryIncomesForChar = createSelector(selectSquashedByCategoryIncomes, (incomes) =>
  incomes.map(({ value, category }) => ({ transactionName: category, A: value })),
)

export const selectIncomesSum = createSelector(selectIncomes, ({ incomes }) =>
  incomes.reduce((acc, income) => acc + income.value, 0),
)

export const selectIncomeOptions = createSelector(selectIncomeCategories, (incomeCategories) => {
  return incomeCategories.map((category) => ({
    value: category,
    label: category,
  }))
})

export default incomeSlice.reducer
