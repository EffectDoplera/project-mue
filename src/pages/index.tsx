import { useAppSelector, useAuth } from 'hooks'
import { MainLayout } from 'layouts'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { PageRoutes } from 'router'
import { selectIsLoading } from 'store/globalSlice'

const Home: NextPage = () => {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  const isLoading = useAppSelector(selectIsLoading)

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push(PageRoutes.LOGIN).then(() => ({}))
    }
  }, [])

  return (
    <MainLayout>
      <div>Главная страница</div>
      <div>{user?.id}</div>
      <div>{user?.email}</div>
    </MainLayout>
  )
}

export default Home
