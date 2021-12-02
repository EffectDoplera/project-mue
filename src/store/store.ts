import { configureStore } from '@reduxjs/toolkit'
import globalReducer from 'store/globalSlice'

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
