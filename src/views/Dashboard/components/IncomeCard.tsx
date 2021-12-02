import { ArrowUpward, AccountBalanceWallet } from '@mui/icons-material'
import { Avatar, Box, Grid, Typography } from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'

import { MainCard } from 'components/MainCard'
import { FC } from 'react'

const CardWrapper = styled(MainCard)(({ theme }) => ({
  background: `linear-gradient(-90deg, ${theme.palette.secondary.dark}, ${theme.palette.secondary.light})`,
  color: theme.palette.text.primary,
  overflow: 'hidden',
}))

interface IncomeCardProps {
  isLoading: boolean
}

export const IncomeCard: FC<IncomeCardProps> = ({ isLoading }) => {
  const theme = useTheme()

  return (
    <CardWrapper title={'Title'}>
      <Box sx={{ p: 2.25 }}>
        <Grid container direction="column">
          <Grid item>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Avatar
                  variant="rounded"
                  sx={{
                    // ...theme.typography.commonAvatar,
                    // ...theme.typography.largeAvatar,
                    backgroundColor: theme.palette.primary.main,
                    mt: 1,
                  }}
                >
                  <AccountBalanceWallet />
                </Avatar>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                  $500.00
                </Typography>
              </Grid>
              <Grid item>
                <Avatar
                  sx={{
                    cursor: 'pointer',
                    // ...theme.typography.smallAvatar,
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.dark,
                  }}
                >
                  <ArrowUpward fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                </Avatar>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ mb: 1.25 }}>
            <Typography
              sx={{
                fontSize: '1rem',
                fontWeight: 500,
                color: theme.palette.primary.light,
              }}
            >
              Total Earning
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </CardWrapper>
  )
}
