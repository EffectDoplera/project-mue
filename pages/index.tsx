import { MainLayout } from 'layouts'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from 'src/hooks'
import { PageRoutes } from '../router'

const Home: NextPage = () => {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(PageRoutes.LOGIN)
    }
  }, [router, isAuthenticated])

  return (
    <MainLayout>
      <div>Главная страница</div>
      <div>{user?.id}</div>
      <div>{user?.email}</div>
    </MainLayout>
  )
}

export default Home
