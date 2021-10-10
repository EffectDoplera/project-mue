import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store/store'

export type GlobalState = {
  isLoading: boolean
  isInit: boolean
}

const initialState: GlobalState = {
  isLoading: false,
  isInit: false,
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state) => {
          state.isLoading = false
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state) => {
          state.isLoading = false
        },
      )
  },
})

export const selectIsInit = (state: RootState) => state.global.isInit

export const selectIsLoading = (state: RootState) => state.global.isLoading

export default globalSlice.reducer
