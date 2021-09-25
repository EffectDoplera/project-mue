import { MoneyCard, TabBar, TransactionActions, Transactions, Income, Expense } from 'components'
import { MainLayout } from 'layouts'
import { Box, Card, CardActions, CardContent, Grid, Paper, Stack, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import React, { FC, useState } from 'react'
import { TransactionsType } from 'enums'
import { Char } from 'components/Char/Char'
import { useRouter } from 'next/dist/client/router'
import { indexedDBLocalPersistence } from '@firebase/auth'
import { TransactionActionItem } from 'components/TransactionActions/TransactionActionItem'
import IncomeActionButton from 'components/Income/IncomeActionButton'

const BasicTabs: FC = () => {
  const [tabValue, setTabValue] = useState(TransactionsType.INCOME)
  const router = useRouter()

  const transactionKeys = Object.keys(TransactionsType)

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
                    <IncomeActionButton />
                  </TabPanel>
                  <TabPanel value={TransactionsType.COST}>
                    <TransactionActions label="Внести расходы" />
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

export default BasicTabs
