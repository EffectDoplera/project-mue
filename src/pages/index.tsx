import { gql } from 'apollo-server-micro'
import { MainLayout } from 'layouts'
import { initializeApollo } from 'lib/apollo'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { getSession } from 'next-auth/client'
import { ApiRoutes } from 'router'
import { Dashboard } from 'views'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const apolloClient = initializeApollo()
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

  const { data } = await apolloClient.query({
    query: gql`
      query Operations {
        operations {
          id
          title
          type
          category
          amount
          currency
        }
      }
    `,
  })

  return {
    props: {
      operations: data.operations,
    } as Props,
  }
}
type Props = {
  operations: any[]
}

const DashboardPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ operations }) => {
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  )
}

export default DashboardPage
