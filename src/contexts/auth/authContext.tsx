import { User as UserModel } from 'core/domain/users/user'
import { createContext, FC, Reducer, useReducer } from 'react'
import { AuthorizeService } from 'data/services/authorize/AuthorizeService'
import { SigninDto } from 'core/domain/authorize/dto/signin.dto'
import { SignupDto } from 'core/domain/authorize/dto/signup.dto'
import { AuthActions, AuthActionsType } from './authActions'

interface AuthState {
  isAuthenticated: boolean
  isInitialized: boolean
  user: UserModel | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
}

export const AuthContext = createContext({
  ...initialState,
  signIn: (signInDto: SigninDto) => Promise.resolve(),
  // signInWithGithub: () => Promise.resolve(),
  // signInWithGoogle: () => Promise.resolve(),
  // signInWithFaceBook: () => Promise.resolve(),
  // signInWithTwitter: () => Promise.resolve(),
  signUp: (signUpDto: SignupDto) => Promise.resolve(),
  logout: () => Promise.resolve(),
})

const handlers: Record<AuthActions, Reducer<AuthState, AuthActionsType>> = {
  [AuthActions.SIGN_IN]: (state, action) => {
    const { user } = action?.payload

    return {
      ...state,
      isAuthenticated: true,
      user,
    }
  },

  [AuthActions.SIGN_UP]: (state, action) => {
    const { user } = action?.payload

    return {
      ...state,
      isAuthenticated: true,
      user,
    }
  },

  [AuthActions.LOGOUT]: (state) => state,

  [AuthActions.DEFAULT]: (state) => state,
}

const authReducer: Reducer<AuthState, AuthActionsType> = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}

export const AuthProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const signIn = async (userData: SigninDto): Promise<void> => {
    let authUser: UserModel | null

    if (!localStorage.getItem('user')) {
      authUser = await AuthorizeService.signIn(userData)
      localStorage.setItem('user', JSON.stringify(authUser))
    }

    authUser = JSON.parse(localStorage.getItem('user') ?? '')

    dispatch({
      type: AuthActions.SIGN_IN,
      payload: {
        user: authUser,
      },
    })
  }

  const signUp = async (userData: SignupDto): Promise<void> => {
    const authUser = await AuthorizeService.signUp(userData)

    dispatch({
      type: AuthActions.SIGN_UP,
      payload: {
        user: authUser,
      },
    })
  }

  const logout = async (): Promise<void> => {
    await AuthorizeService.logout()

    dispatch({
      type: AuthActions.LOGOUT,
    })
  }

  return <AuthContext.Provider value={{ ...state, signIn, signUp, logout }}>{children}</AuthContext.Provider>
}
