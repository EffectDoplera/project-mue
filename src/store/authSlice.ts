import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { SigninDto, SignupDto } from 'src/core/domain/authorize'
import { UserModel } from 'src/core/domain/users'
import { AuthorizeService } from 'src/data/services'
import { RootState } from './store'

type AuthState = {
  isAuthenticated: boolean
  user: UserModel | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
}

export const signIn = createAsyncThunk('sigIn', async (userData: SigninDto) => {
  let authUser: UserModel | null

  if (!localStorage.getItem('user')) {
    authUser = await AuthorizeService.signIn(userData)
    localStorage.setItem('user', JSON.stringify(authUser))
  }

  authUser = JSON.parse(localStorage.getItem('user') ?? '')

  return authUser
})

export const signUp = createAsyncThunk('signUp', async (userData: SignupDto) => {
  return await AuthorizeService.signUp(userData)
})

export const logout = createAsyncThunk('logout', async () => {
  return await AuthorizeService.logout()
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload
        state.isAuthenticated = true
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload
        state.isAuthenticated = true
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
        state.isAuthenticated = false
      })
  },
})

export const selectAuthState = (state: RootState) => state.auth
export const selectIsAuth = createSelector(selectAuthState, (state) => state.isAuthenticated)

export default authSlice.reducer
