import { CostCategory } from 'enums'
import { Box, Stack } from '@mui/material'
import React, { FC } from 'react'
import { TransactionItem } from './TransactionItem'

interface TransactionsProps {
  transactions: any[]
}

export const Transactions: FC<TransactionsProps> = ({ transactions }) => {
  return (
    <Stack spacing={1}>
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.category} {...transaction} />
      ))}
    </Stack>
  )
}
