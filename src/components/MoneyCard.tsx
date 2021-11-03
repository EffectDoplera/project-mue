import { Card, CardContent, Grid, Paper, Typography } from '@mui/material'
import { useTransactionSelector } from 'hooks'

export const MoneyCard = () => {
  const { transactionSum, transactionType } = useTransactionSelector()
  const FEATURE = false

  return (
    <Card>
      <CardContent>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h4">
              {transactionSum} {'₽'}
            </Typography>
            <Typography color="textSecondary">{`Monthly ${transactionType.toLowerCase()} forecast ${Math.ceil(
              Math.random() * transactionSum + transactionSum,
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
