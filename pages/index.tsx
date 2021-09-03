import { MainLayout } from 'layouts'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../context/auth/authContext'
import { PageRoutes } from '../router'

const Home: NextPage = () => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push(PageRoutes.LOGIN)
    }
  }, [router, user])

  return (
    <MainLayout>
      <div>Главная страница</div>
      <div>{user?.uid}</div>
      <div>{user?.email}</div>
      <div>{user?.providerId}</div>
    </MainLayout>
  )
}

export default Home

// export async function getServerSideProps(context) {
//   try {
//     const cookies = nookies.get(context)
//     const {uid, email} = cookies.token
//   }
// }
