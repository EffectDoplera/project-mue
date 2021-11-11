import { TabContext } from '@mui/lab'
import { OperationType } from 'core/enums'
import { MainLayout } from 'layouts'
import { DashboardModule } from 'modules'
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/client'
import { NexusGenObjects } from 'nexus-typegen'
import React, { useCallback, useState } from 'react'
import { initializeApollo } from 'lib/apollo'
import { gql } from 'apollo-server-micro'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const apolloClient = initializeApollo()
  const session = await getSession({ req })

  if (!session) {
    res.statusCode = 403
    return { props: { operations: [] } }
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
    },
  }
}
type Props = {
  operations: NexusGenObjects['Operation'][]
}

const Dashboard: NextPage<Props> = ({ operations }) => {
  const [tabValue, setTabValue] = useState(OperationType.INCOME)
  console.log(operations)

  const handleChange = useCallback((event: React.SyntheticEvent, newValue: OperationType) => setTabValue(newValue), [])

  return (
    <MainLayout>
      <TabContext value={tabValue}>
        <DashboardModule changeTransactionContext={handleChange} />
      </TabContext>
    </MainLayout>
  )
}

export default Dashboard
