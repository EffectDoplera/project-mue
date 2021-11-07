import { TabContext } from '@mui/lab'
import { CategoryType } from 'core/enums'
import { MainLayout } from 'layouts'
import { DashboardModule } from 'modules'
import { GetServerSideProps, NextPage } from 'next'
import { getSession, useSession } from 'next-auth/client'
import React, { useCallback, useState } from 'react'
import prisma from 'db/prisma'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req })
  if (!session) {
    res.statusCode = 403
    return { props: { drafts: [] } }
  }

  const drafts = await prisma.post.findMany()
  return {
    props: { drafts },
  }
}
type Props = {
  drafts: any[]
}

const Dashboard: NextPage<Props> = ({ drafts }) => {
  const [session] = useSession()
  console.log(drafts)
  console.log(session)

  const [tabValue, setTabValue] = useState(CategoryType.INCOME)

  const handleChange = useCallback((event: React.SyntheticEvent, newValue: CategoryType) => setTabValue(newValue), [])

  return (
    <MainLayout>
      <TabContext value={tabValue}>
        <DashboardModule changeTransactionContext={handleChange} />
      </TabContext>
    </MainLayout>
  )
}

export default Dashboard
