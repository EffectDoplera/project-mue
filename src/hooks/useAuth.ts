import { SigninDto, SignupDto } from 'core/domain/authorize'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { PageRoutes } from 'router'
import { logout, selectAuthState, signIn, signUp } from 'store/authSlice'

export const useAuth = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const authState = useAppSelector(selectAuthState)

  useEffect(() => {
    void (async () => await router.prefetch(PageRoutes.MAIN))()
  }, [router])

  const signInHandler = async (data: SigninDto) => {
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
    signIn: signInHandler,
    signUp: signUpHandler,
    logout: logoutHandler,
  }
}
