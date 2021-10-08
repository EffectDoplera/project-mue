import { SigninDto, SignupDto } from 'src/core/domain/authorize'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { PageRoutes } from 'src/router'
import { useAppDispatch } from 'src/hooks/useAppDispatch'
import { useAppSelector } from 'src/hooks/useAppSelector'
import { selectAuthState, signIn, signUp } from 'src/store/authSlice'

export const useAuth = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const authState = useAppSelector(selectAuthState)

  // useEffect(() => {
  //   // Prefetch the dashboard page
  //   router.prefetch(PageRoutes.MAIN)
  // }, [])

  const signInHandler = async (data: SigninDto) => {
    dispatch(signIn(data))
    await router.push(PageRoutes.MAIN)
  }

  const signUpHandler = async (data: SignupDto) => {
    dispatch(signUp(data))
    await router.push(PageRoutes.MAIN)
  }

  return {
    ...authState,
    signIn: signInHandler,
    signUp: signUpHandler,
  }
}
