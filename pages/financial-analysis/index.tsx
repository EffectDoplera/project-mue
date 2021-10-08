import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Grid, Paper, Stack, Tab } from '@mui/material'
import { Expense, Income, MoneyCard, TransactionActions } from 'src/components'
import { Char } from 'src/components/Char/Char'
import { TransactionsType } from 'src/enums'
import { MainLayout } from 'src/layouts'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import { getIncomeByUserId, selectIncomes } from 'src/modules/Income/incomeSlice'

const FinancialAnalysis: NextPage = () => {
  const dispatch = useAppDispatch()
  const { incomes } = useAppSelector(selectIncomes)

  useEffect(() => {
    if (!incomes.length) {
      dispatch(getIncomeByUserId())
    }
  }, [dispatch, incomes])

  const [tabValue, setTabValue] = useState(TransactionsType.INCOME)

  // const handleChange = (event: object, newValue: number) => {
  //   router.push(`/financial-analysis/${transactionKeys[newValue].toLocaleLowerCase()}`)
  // }

  const handleChange = (event: React.SyntheticEvent, newValue: TransactionsType) => setTabValue(newValue)

  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MoneyCard />
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ width: '100%', height: 400 }}>
            <Char />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={tabValue}>
              <Stack spacing={2}>
                <Paper>
                  <TabList onChange={handleChange} aria-label="lab API tabs example" centered variant="fullWidth">
                    <Tab label={TransactionsType.INCOME} value={TransactionsType.INCOME} />
                    <Tab label={TransactionsType.COST} value={TransactionsType.COST} />
                  </TabList>
                </Paper>
                <Paper>
                  <TabPanel value={TransactionsType.INCOME}>
                    <Income />
                  </TabPanel>
                  <TabPanel value={TransactionsType.COST}>
                    <Expense />
                  </TabPanel>
                </Paper>
                <Paper>
                  <TabPanel value={TransactionsType.INCOME}>
                    <TransactionActions type={TransactionsType.INCOME} />
                  </TabPanel>
                  <TabPanel value={TransactionsType.COST}>
                    <TransactionActions type={TransactionsType.COST} />
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
