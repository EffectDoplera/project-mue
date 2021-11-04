import { TabContext } from '@mui/lab'
import { CategoryType } from 'core/enums'
import { useAppSelector, useAuth } from 'hooks'
import { MainLayout } from 'layouts'
import { DashboardModule } from 'modules'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { PageRoutes } from 'router'
import { selectIsLoading } from 'store/globalSlice'

const Dashboard: NextPage = () => {
  const auth = useAuth()

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
