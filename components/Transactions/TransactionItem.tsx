import { CostCategory, IncomeCategory } from '@/enums/category'
import { Avatar, Box, Grid, Typography } from '@material-ui/core'
import React, { FC } from 'react'
import { getTransactionIcon } from './Transaction.helpers'

interface ITransactionItemProps {
  category: CostCategory
  value: number
  currency: string
}

export const TransactionItem: FC<ITransactionItemProps> = ({ category, value, currency }) => {
  const TransactionIcon = getTransactionIcon(category)
  return (
    <Box p={1}>
      <Grid container>
        <Grid item xs={1} container justifyContent="center" alignItems="center">
          <Avatar>
            <TransactionIcon />
          </Avatar>
        </Grid>

        <Grid item xs={11}>
          <Box>
            <Grid container direction="column">
              <Grid item>
                <Typography>{category}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  {value} {currency}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
