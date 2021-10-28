import { Card, CardContent, Grid, Paper, Typography } from '@mui/material'
import { useAppSelector } from 'hooks'
import { selectIncomesSum } from 'modules/Income/incomeSlice'
import React from 'react'

export const MoneyCard = () => {
  const incomesSum = useAppSelector(selectIncomesSum)
  const FEATURE = false

  return (
    <Card>
      <CardContent>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h4">
              {incomesSum} {'₽'}
            </Typography>
            <Typography color="textSecondary">{`Monthly expense forecast ${Math.ceil(
              Math.random() * incomesSum + incomesSum,
            )} ₽`}</Typography>
          </Grid>
          <Grid item>
            {FEATURE ? (
              <Grid container spacing={3}>
                <Grid item>
                  <Paper variant="outlined" style={{ width: 50, height: 50, backgroundColor: 'black' }} />
                </Grid>
                <Grid item>
                  <Paper variant="outlined" style={{ width: 50, height: 50, backgroundColor: 'black' }} />
                </Grid>
                <Grid item>
                  <Paper variant="outlined" style={{ width: 50, height: 50, backgroundColor: 'black' }} />
                </Grid>
              </Grid>
            ) : (
              <Paper variant="outlined" style={{ width: 300, backgroundColor: 'yellowgreen', textAlign: 'center' }}>
                {`There's a feature coming soon`}
              </Paper>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
