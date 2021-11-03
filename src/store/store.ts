import { configureStore } from '@reduxjs/toolkit'
import authReducer from 'store/authSlice'
import globalReducer from 'store/globalSlice'
import transactionSlice from 'store/transactionSlice'

export const store = configureStore({
  reducer: {
    global: globalReducer,
    auth: authReducer,
    transactions: transactionSlice,
  },
  devTools: process.env.NODE_ENV === 'development',
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
