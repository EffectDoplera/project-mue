import { List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import TransactionIcon from 'components/Transactions/TransactionIcon'
import { Expense, Income } from 'core/domain'
import { FC } from 'react'

interface TransactionsProps {
  transactions: Income[] | Expense[]
}

export const Transactions: FC<TransactionsProps> = ({ transactions }) => {
  if (!transactions.length) {
    return <Typography variant="h6">This list is still empty</Typography>
  }

  return (
    <List dense>
      {transactions.map(({ category, value, _id }) => (
        <ListItem key={_id}>
          <ListItemAvatar>
            <TransactionIcon category={category} />
          </ListItemAvatar>
          <ListItemText
            primary={category}
            secondary={
              <Typography variant="h6">
                {value} {'RUB'}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  )
}
