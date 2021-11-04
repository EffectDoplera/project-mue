import { TabContext } from '@mui/lab'
import { CategoryType } from 'core/enums'
import { MainLayout } from 'layouts'
import { DashboardModule } from 'modules'
import { NextPage } from 'next'
import React, { useCallback, useState } from 'react'

const Dashboard: NextPage = () => {
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
