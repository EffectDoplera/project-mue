export enum AuthActions {
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
  LOGOUT = 'LOGOUT',
  DEFAULT = 'DEFAULT',
}

type SignInAction = {
  type: AuthActions.SIGN_IN
  payload?: any
}

type SignUpAction = {
  type: AuthActions.SIGN_UP
  payload?: any
}

type LogoutAction = {
  type: AuthActions.LOGOUT
  payload?: any
}

type DefaultAction = {
  type: AuthActions.DEFAULT
  payload?: any
}

export type AuthActionsType = SignInAction | SignUpAction | LogoutAction | DefaultAction
