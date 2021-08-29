import {
  MoneyCard,
  TabBar,
  TabPanel,
  TransactionActions,
  Transactions,
} from '@/components/index'
import MainLayout from '@/layouts/MainLayout'
import { Card, CardActions, CardContent, Grid, Paper } from '@material-ui/core'
import React, { FC, useState } from 'react'
import { TransactionsType } from '@/enums/index'
import { Char } from '@/components/Char/Char'

const BasicTabs: FC = () => {
  const [tabValue, setTabValue] = useState(0)

  const handleChange = (event: object, newValue: number) =>
    setTabValue(newValue)

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
            <TabBar
              currentTab={tabValue}
              changeTab={handleChange}
              tabNames={transactionNames}
            />
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
