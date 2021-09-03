import { CostCategory } from 'enums'
import { Box } from '@material-ui/core'
import React from 'react'
import { TransactionItem } from './TransactionItem'

const transactions = [
  {
    category: CostCategory.CASH,
    value: 3000,
    currency: 'рублей',
  },
  {
    category: CostCategory.VOCATION,
    value: 5000,
    currency: 'рублей',
  },
  {
    category: CostCategory.UTILITIES,
    value: 500,
    currency: 'рублей',
  },
]

export const Transactions = () => {
  return (
    <Box>
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.category} {...transaction} />
      ))}
    </Box>
  )
}
