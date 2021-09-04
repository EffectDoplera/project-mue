import { CostCategory } from 'enums/category'
import { Grid, Typography } from '@mui/material'
import React, { FC } from 'react'
import TransactionIcon from './TransactionIcon'

interface ITransactionItemProps {
  category: CostCategory
  value: number
  currency: string
}

export const TransactionItem: FC<ITransactionItemProps> = ({ category, value, currency }) => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={1}>
        <TransactionIcon category={category} />
      </Grid>

      <Grid item container direction="column" xs={11}>
        <Grid item>
          <Typography>{category}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            {value} {currency}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
