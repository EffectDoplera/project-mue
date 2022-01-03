import { MainLayout } from 'layouts'
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/client'
import { ApiRoutes } from 'router'
import { Dashboard } from 'views'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req })

  if (!session) {
    res.statusCode = 403

    return {
      redirect: {
        destination: ApiRoutes.LOGIN,
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

const DashboardPage: NextPage = () => (
  <MainLayout>
    <Dashboard />
  </MainLayout>
)

export default DashboardPage
