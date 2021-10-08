import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import expenseReducer from 'src/modules/expense/expenseSlice'
import incomeReducer from 'src/modules/Income/incomeSlice'
import authReducer from 'src/store/authSlice'
import globalReducer from 'src/store/globalSlice'

export const store = configureStore({
  reducer: {
    global: globalReducer,
    auth: authReducer,
    income: incomeReducer,
    expense: expenseReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
})

const makeStore = () => store

export const wrapper = createWrapper(makeStore)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
