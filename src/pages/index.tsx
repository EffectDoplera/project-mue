import { TabContext } from '@mui/lab'
import { CategoryType } from 'core/enums'
import { useAppSelector, useAuth } from 'hooks'
import { MainLayout } from 'layouts'
import { DashboardModule } from 'modules'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { PageRoutes } from 'router'
import { selectIsLoading } from 'store/globalSlice'

const Dashboard: NextPage = () => {
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const isLoading = useAppSelector(selectIsLoading)

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push(PageRoutes.LOGIN).then(() => ({}))
    }
  }, [isAuthenticated, isLoading, router])

  const [tabValue, setTabValue] = useState(CategoryType.INCOME)

  const handleChange = (event: React.SyntheticEvent, newValue: CategoryType) => setTabValue(newValue)

  return (
    <MainLayout>
      <TabContext value={tabValue}>
        <DashboardModule changeTransactionContext={handleChange} />
      </TabContext>
    </MainLayout>
  )
}

export default Dashboard
