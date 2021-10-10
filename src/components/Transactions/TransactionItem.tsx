import { Stack, Typography } from '@mui/material'
import TransactionIcon from 'components/Transactions/TransactionIcon'
import { CostCategory } from 'enums/category'
import { FC } from 'react'

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
