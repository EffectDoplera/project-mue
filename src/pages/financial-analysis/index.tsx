import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Grid, Paper, Stack, Tab } from '@mui/material'
import { Expense, Income, IncomesModal, MoneyCard, TransactionActions } from 'components'
import { Char } from 'components/Char/Char'
import { CategoryType } from 'core/enums'
import { MainLayout } from 'layouts'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks'
import { getIncomeByUserId, selectIncomes, selectSquashedByCategoryIncomes } from 'modules/Income/incomeSlice'
import { selectIsLoading } from 'store/globalSlice'

const FinancialAnalysis: NextPage = () => {
  const [openIncomeModal, setOpenIncomeModal] = useState(false)
  const dispatch = useAppDispatch()
  const incomes = useAppSelector(selectSquashedByCategoryIncomes)
  const isLoading = useAppSelector(selectIsLoading)

  useEffect(() => {
    if (!incomes.length && !isLoading) {
      dispatch(getIncomeByUserId())
    }
  }, [dispatch, isLoading, incomes])

  const [tabValue, setTabValue] = useState(CategoryType.INCOME)

  const handleChange = (event: React.SyntheticEvent, newValue: CategoryType) => setTabValue(newValue)

  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MoneyCard />
        </Grid>

        <Grid item xs={12} lg={8}>
          <Paper style={{ width: '100%', minHeight: 400, height: '100%' }}>
            <Char />
          </Paper>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={tabValue}>
              <Stack spacing={2}>
                <Paper>
                  <TabList onChange={handleChange} aria-label="lab API tabs example" centered variant="fullWidth">
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
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  )
}

export default FinancialAnalysis
