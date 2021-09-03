import { MoneyCard, TabBar, TabPanel, TransactionActions, Transactions } from 'components'
import { MainLayout } from 'layouts'
import { Card, CardActions, CardContent, Grid, Paper } from '@material-ui/core'
import React, { FC, useState } from 'react'
import { TransactionsType } from 'enums'
import { Char } from 'components/Char/Char'
import { useRouter } from 'next/dist/client/router'

const BasicTabs: FC = () => {
  const [tabValue] = useState(0)
  const router = useRouter()

  const transactionKeys = Object.keys(TransactionsType)

  const handleChange = (event: object, newValue: number) => {
    router.push(`/financial-analysis/${transactionKeys[newValue].toLocaleLowerCase()}`)
  }

  const transactionNames = Object.values(TransactionsType)

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
          <Paper>
            <TabBar currentTab={tabValue} changeTab={handleChange} tabNames={transactionNames} />
          </Paper>
          <Paper>
            {transactionNames.map((item, index) => (
              <TabPanel key={index} value={tabValue} index={index}>
                <Card>
                  <CardContent>
                    <Transactions />
                  </CardContent>
                  <CardActions>
                    <TransactionActions />
                  </CardActions>
                </Card>
              </TabPanel>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </MainLayout>
  )
}

export default BasicTabs
