import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import expenseReducer from 'store/expenseSlice'
import incomeReducer from 'store/incomeSlice'
import authReducer from 'store/authSlice'
import globalReducer from 'store/globalSlice'

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
