import { ArrowUpward, AccountBalanceWallet } from '@mui/icons-material'
import { Avatar, Box, Grid, Typography } from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'

import { MainCard } from 'components/MainCard'
import { FC } from 'react'

const CardWrapper = styled(MainCard)(({ theme }) => ({
  background: `linear-gradient(-90deg, ${theme.palette.secondary.dark}, ${theme.palette.secondary.light})`,
  color: theme.palette.getContrastText(theme.palette.secondary.dark),
  overflow: 'hidden',
}))

interface ExpenseCardProps {
  isLoading: boolean
  amount: number
}

export const ExpenseCard: FC<ExpenseCardProps> = ({ isLoading, amount }) => {
  const theme = useTheme()

  return (
    <CardWrapper>
      <Box sx={{ p: 2.25 }}>
        <Grid container direction="column" gap={1}>
          <Grid item>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Avatar
                  variant="rounded"
                  sx={{
                    backgroundColor: theme.palette.warning.main,
                  }}
                >
                  <AccountBalanceWallet />
                </Avatar>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <Typography variant={'h4'}>₽{amount}</Typography>
              </Grid>

              <Grid item>
                <Avatar
                  sx={{
                    cursor: 'pointer',
                    backgroundColor: theme.palette.success.main,
                  }}
                >
                  <ArrowUpward sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                </Avatar>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Typography variant={'h6'}>Total Expense</Typography>
          </Grid>
        </Grid>
      </Box>
    </CardWrapper>
  )
}
