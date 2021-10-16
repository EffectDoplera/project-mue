import { List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import TransactionIcon from 'components/Transactions/TransactionIcon'
import { Expense, Income } from 'core/domain'
import { FC } from 'react'

interface TransactionsProps {
  transactions: Income[] | Expense[]
}

export const Transactions: FC<TransactionsProps> = ({ transactions }) => (
  <List dense>
    {transactions.map(({ category, value }) => (
      <ListItem key={category}>
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
