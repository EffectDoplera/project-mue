import { SigninDto, SignupDto } from 'core/domain/authorize'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { useRouter } from 'next/router'
import { PageRoutes } from 'router'
import { selectAuthState, signIn, signUp } from 'store/authSlice'

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
