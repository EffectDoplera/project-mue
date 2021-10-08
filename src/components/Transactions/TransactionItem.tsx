import { CostCategory } from 'src/enums/category'
import { Grid, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import TransactionIcon from 'src/components/Transactions/TransactionIcon'

interface ITransactionItemProps {
  category: CostCategory
  value: number
  currency: string
}

export const TransactionItem: FC<ITransactionItemProps> = ({ category, value, currency }) => {
  return (
    <Stack direction="row" spacing={2} alignItems="flex-start">
      <TransactionIcon category={category} />
      <Stack>
        <Typography>{category}</Typography>
        <Typography variant="h6">
          {value} {currency}
        </Typography>
      </Stack>
    </Stack>
  )
}
