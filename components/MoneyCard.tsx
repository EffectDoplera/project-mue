import { Card, CardContent, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'

export const MoneyCard = () => {
  return (
    <Card>
      <CardContent>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Typography variant='h4' gutterBottom>
              0 рублей
            </Typography>
            <Typography color='textSecondary'>
              Прогноз на месяц 0 рублей
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={3}>
              <Grid item>
                <Paper
                  variant='outlined'
                  style={{ width: 50, height: 50, backgroundColor: 'black' }}
                />
              </Grid>
              <Grid item>
                <Paper
                  variant='outlined'
                  style={{ width: 50, height: 50, backgroundColor: 'black' }}
                />
              </Grid>
              <Grid item>
                <Paper
                  variant='outlined'
                  style={{ width: 50, height: 50, backgroundColor: 'black' }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
