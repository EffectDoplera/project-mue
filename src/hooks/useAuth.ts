import { SigningDto, SignupDto, UserModel } from 'core/domain'
import { useLocalStorage } from 'hooks'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { PageRoutes } from 'router'
import { logout, selectAuthState, setStorageUser, signIn, signUp } from 'store/authSlice'

export const useAuth = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const authState = useAppSelector(selectAuthState)
  const [storageUser] = useLocalStorage<UserModel | null>('user', null)

  useEffect(() => {
    if (storageUser) {
      dispatch(setStorageUser(storageUser))
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const signInHandler = async (data: SigningDto) => {
    dispatch(signIn(data))
    await router.push(PageRoutes.MAIN)
  }

  const signUpHandler = async (data: SignupDto) => {
    dispatch(signUp(data))
    await router.push(PageRoutes.MAIN)
  }

  const logoutHandler = async () => {
    dispatch(logout())
    await router.push(PageRoutes.LOGIN)
  }

  return {
    ...authState,
    ...storageUser,
    signIn: signInHandler,
    signUp: signUpHandler,
    logout: logoutHandler,
  }
}
