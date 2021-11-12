import { Card, CardContent, Grid, Paper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useTransactionSelector } from 'hooks'
import { operationPrediction } from 'utils/helpers'
import { ThreeMonthBars } from './components'

export const MoneyCard = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const { transactionSum, transactionType } = useTransactionSelector()
  const FEATURE = false

  return (
    <Card>
      <CardContent>
        <Grid container alignItems="center" justifyContent="space-between" gap={1}>
          <Grid item>
            <Stack gap={1}>
              <Typography variant="h4">
                {transactionSum} {'₽'}
              </Typography>
              <Typography color="textSecondary">
                {`Monthly ${transactionType.toLowerCase()} forecast ${operationPrediction(transactionSum)} ₽`}
              </Typography>
            </Stack>
          </Grid>
          {matches && (
            <Grid item>
              {FEATURE ? (
                <ThreeMonthBars />
              ) : (
                <Paper sx={{ backgroundColor: 'primary.main', p: 1 }}>{`There's a feature coming soon`}</Paper>
              )}
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  )
}
