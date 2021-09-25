import { configureStore } from '@reduxjs/toolkit'
import incomeReducer from 'src/modules/Income/incomeSlice'

export const store = configureStore({
  reducer: {
    income: incomeReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
