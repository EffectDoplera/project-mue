import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Grid, Paper, Stack, Tab } from '@mui/material'
import { Expense, Income, IncomesModal, MoneyCard, TransactionActions } from 'components'
import { Char } from 'components/Char/Char'
import { CategoryType } from 'core/enums'
import { useAppDispatch, useAppSelector, useAuth } from 'hooks'
import { MainLayout } from 'layouts'
import { getIncomeByUserId, selectSquashedByCategoryIncomes } from 'modules/Income/incomeSlice'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { PageRoutes } from 'router'
import { selectIsLoading } from 'store/globalSlice'

const Dashboard: NextPage = () => {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  const [openIncomeModal, setOpenIncomeModal] = useState(false)
  const dispatch = useAppDispatch()
  const incomes = useAppSelector(selectSquashedByCategoryIncomes)
  const isLoading = useAppSelector(selectIsLoading)

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push(PageRoutes.LOGIN).then(() => ({}))
    }
  }, [isAuthenticated, isLoading, router])

  useEffect(() => {
    if (!incomes.length && !isLoading) {
      dispatch(getIncomeByUserId())
    }
  }, [dispatch, isLoading, incomes])

  const [tabValue, setTabValue] = useState(CategoryType.INCOME)

  const handleChange = (event: React.SyntheticEvent, newValue: CategoryType) => setTabValue(newValue)

  // TODO: вынести изменения  типа транзакции в контекст и получать данные в компонентах через хук
  return (
    <MainLayout>
      <TabContext value={tabValue}>
        <Grid container spacing={3} paddingTop={3}>
          <Grid item xs={12}>
            <MoneyCard />
          </Grid>

          <Grid item xs={12} md={8} lg={8}>
            <Paper
              style={{
                width: '100%',
                minHeight: 400,
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Char />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            <Stack spacing={2}>
              <Paper>
                <TabList onChange={handleChange} centered variant="fullWidth">
                  <Tab label={CategoryType.INCOME} value={CategoryType.INCOME} />
                  <Tab label={CategoryType.EXPENSE} value={CategoryType.EXPENSE} />
                </TabList>
              </Paper>
              <Paper>
                <TabPanel value={CategoryType.INCOME}>
                  <Income />
                </TabPanel>
                <TabPanel value={CategoryType.EXPENSE}>
                  <Expense />
                </TabPanel>
              </Paper>
              <Paper>
                <TabPanel value={CategoryType.INCOME}>
                  <IncomesModal open={openIncomeModal} setOpen={setOpenIncomeModal} />
                </TabPanel>
                <TabPanel value={CategoryType.EXPENSE}>
                  <TransactionActions type={CategoryType.EXPENSE} />
                </TabPanel>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </TabContext>
    </MainLayout>
  )
}

export default Dashboard
